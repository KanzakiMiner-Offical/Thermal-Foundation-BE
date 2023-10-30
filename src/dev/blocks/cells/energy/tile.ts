const TransferMode = {
   IN: 0,
   OUT: 1,
   NONE: 2
} as const;

namespace Machine {
   export class EnergyCell extends ProgressingMachine {
      // data
      heartIndex = 0;
      defaultBasePower = 20;
      basePower: number;
      transferIn = 2000;
      transferOut = 2000;
      transferInMax = 2000;
      transferOutMax = 2000;
      defaultValues = {
         energy: 0,
         configData: 0
      };
      // data_augument
      bonus_xfer = 1;
      bonus_capacity = 1;

      upgrades: ["upgrade", "redstone_flux"];

      useUpgrade(): AugmentsAPI.AugmentSet {
         let upgrades = AugmentsAPI.useUpgrade(this);
         this.basePower = upgrades.getBaseValue(this.defaultBasePower);
         this.bonus_xfer = upgrades.getEnergyTranfer(1);
         this.bonus_capacity = upgrades.getEnergyCapacity(1);
         return upgrades;
      }

      getScreenByName(): UI.StandartWindow {
         return energyCellUI;
      }

      canRotate(): boolean {
         return true;
      }

      setConfig(mode: number[]): void {
         let config = parseInt(mode.join(""), 3);
         this.data.configData = config;
         this.networkData.putInt("mode", config);
      }

      getConfig(): number[] {
         let config = ("000000" + this.data.configData.toString(3)).slice(-6);
         return [+config[0], +config[1], +config[2], +config[3], +config[4], +config[5]];
      }


      onItemUse(coords: Callback.ItemUseCoordinates, item: ItemStack, player: number): boolean {
         if (ThermalTool.isWrench(item.id) && Entity.getSneaking(player)) {
            let config = this.getConfig();
            config[coords.side] = (config[coords.side] + 1) % 3;
            this.setConfig(config);
            Debug.big(this.data.configData)
         }
         return super.onItemUse(coords, item, player);
      }

      setFacing(side: number): boolean {
         if (super.setFacing(side)) {
            this.rebuildGrid();
            return true;
         }
         return false;
      }

      loadData(): void {
         this.transferInMax = this.transferOutMax = this.basePower * 100 * this.bonus_xfer;
         this.transferIn = Math.min(this.transferIn, this.transferInMax) * this.bonus_xfer
         this.transferOut = Math.min(this.transferOut, this.transferOutMax) * this.bonus_xfer
      }

      onTick(): void {
         this.useUpgrade();
         this.loadData();
         this.container.sendEvent("updateText", {
            transferIn: this.transferIn,
            transferOut: this.transferOut,
            energy: this.data.energy,
            max_energy: this.getEnergyStorage()
         })
         let index = Math.floor(this.data.energy / this.getEnergyStorage() * 8);
         if (this.heartIndex !== index) {
            this.heartIndex = index;
            this.networkData.putInt("heartIndex", this.heartIndex);
            this.networkData.sendChanges()
         }

         this.container.setScale("energyScale", this.data.energy / this.getEnergyStorage() || 0);
         this.container.sendChanges();
      }

      energyTick(type: string, src: EnergyTileNode): void {
         let output = Math.min(this.transferOut, this.data.energy);
         this.data.energy += src.add(output) - output;
      }

      energyReceive(type: string, amount: number, voltage: number): number {
         let maxPower = this.transferIn
         if (voltage > maxPower) {
            amount = Math.min(amount, maxPower);
         }
         var add = Math.min(amount, this.getEnergyStorage() - this.data.energy);
         this.data.energy += add;
         return add;
      };

      getEnergyStorage(): number {
         return this.basePower * 100000 * this.bonus_capacity;
      }

      canReceiveEnergy(side: number): boolean {
         return this.getConfig()[side] == TransferMode.IN
      }

      canExtractEnergy(side: number): boolean {
         return this.getConfig()[side] == TransferMode.OUT
      }

      @ContainerEvent(Side.Client)
      updateText(container: ItemContainer, window: any, content: any, data: { transferIn: number, transferOut: number, energy: number, max_energy: number }): void {
         if (content) {
            let relativeEnergy = data.energy / data.max_energy * 100
            content.elements["textLeft"].text = data.transferIn + "";
            content.elements["textRight"].text = data.transferOut + "";
            content.elements["textEnergy"].text = data.energy + "/" + data.max_energy + "RF (" + relativeEnergy.toFixed(2) + "%)";
            if (data.transferIn >= 10000)
               content.elements["textLeft"].x = 142;
            else if (data.transferIn < 1000)
               content.elements["textLeft"].x = 167;
            else
               content.elements["textLeft"].x = 152;
            if (data.transferOut >= 10000)
               content.elements["textRight"].x = 262;
            else if (data.transferOut < 1000)
               content.elements["textRight"].x = 287;
            else
               content.elements["textRight"].x = 272;
         }
      }
      @ContainerEvent(Side.Server)
      plus_in(): void {
         this.transferIn += 100;
         this.transferIn = Math.min(this.transferIn, this.transferInMax)
      }
      @ContainerEvent(Side.Server)
      plus_out(): void {
         this.transferOut += 100;
         this.transferOut = Math.min(this.transferOut, this.transferOutMax)
      }
      @ContainerEvent(Side.Server)
      minus_in(): void {
         this.transferIn -= 100;
         this.transferIn = Math.max(this.transferIn, 0)
      }
      @ContainerEvent(Side.Server)
      minus_out(): void {
         this.transferOut -= 100;
         this.transferOut = Math.max(this.transferOut, 0)
      }

      @ClientSide
      renderModel(): void {
         let blockId = Network.serverToLocalId(this.networkData.getInt("blockId"));
         let heartIndex = this.networkData.getInt("heartIndex")
         ModelHelper.mapEnergyCell(this.x, this.y, this.z, blockId, heartIndex, this.getConfig());
      }
   }
   MachineRegistry.registerPrototype(BlockID.thermalEnergyCell, new EnergyCell());
   MachineRegistry.setStoragePlaceFunction("thermalEnergyCell", true)
}