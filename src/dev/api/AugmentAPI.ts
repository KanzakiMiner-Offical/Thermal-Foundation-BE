interface IAugments {
   type: string;
   getExtraEnergyCapacity?(item: ItemInstance, machine: TileEntity): number;
   getExtraEnergyTranfer?(item: ItemInstance, machine: TileEntity): number;
   getBaseValueMultiplier?(item: ItemInstance, machine: TileEntity): number;
   getEnergyMultiplier?(item: ItemInstance, machine: TileEntity): number;
   getPowerMultiplier?(item: ItemInstance, machine: TileEntity): number;
   getSpeed?(item: ItemInstance, machine: TileEntity): number;

   onTick?(item: ItemInstance, machinse: TileEntity): void;
}

namespace AugmentsAPI {
   let data = {};

   export function getUpgrade(id: number): IAugments {
      return data[id];
   }

   export function isUpgrade(id: number): boolean {
      return !!data[id];
   }

   export function isValidUpgrade(id: number, machine: TileEntity): boolean {
      const upgrade = getUpgrade(id);
      const validUpgrade = machine["upgrades"];
      if (upgrade && (!validUpgrade || validUpgrade.indexOf(upgrade.type) != -1)) {
         return true;
      }
      return false;
   }

   export function registerUpgrade(id: number, upgrade: IAugments): void {
      data[id] = upgrade;
   }

   export function useUpgrade(machine: TileEntity): AugmentSet {
      return new AugmentSet(machine);
   }

   export class AugmentSet {
      progressEnergyMultiplier: number;
      progressPowerMultiplier: number;
      extraEnergyCapacity: number;
      baseValueMultiplier: number;
      extraEnergyTranfer: number;
      speedModifier: number

      constructor(protected tileEntity: TileEntity) {
         this.resetRates();
         this.useUpgrade();
      }

      resetRates(): void {
         this.baseValueMultiplier = 1;
         this.progressEnergyMultiplier = 1;
         this.progressPowerMultiplier = 1;
         this.extraEnergyCapacity = 1;
         this.extraEnergyTranfer = 1;
         this.speedModifier = 1
      }

      useUpgrade(): void {
         const container = this.tileEntity.container;
         for (let slotName in container.slots) {
            if (slotName.match(/Upgrade/)) {
               const slot = container.getSlot(slotName);
               const upgrade = getUpgrade(slot.id);
               if (upgrade && this.isValidUpgrade(upgrade)) {
                  this.executeUprade(upgrade, slot);
               }
            }
         }
      }

      isValidUpgrade(upgrade: IAugments): boolean {
         const validUpgrade = this.tileEntity["upgrades"];
         return (!validUpgrade || validUpgrade.indexOf(upgrade.type) != -1);
      }

      executeUprade(upgrade: IAugments, stack: ItemInstance) {
         if (upgrade.type == "upgrade") {
            this.baseValueMultiplier *= upgrade.getBaseValueMultiplier(stack, this.tileEntity)
         }
         if (upgrade.type == "redstone_flux") {
            this.extraEnergyTranfer *= upgrade.getExtraEnergyTranfer(stack, this.tileEntity);
            this.extraEnergyCapacity *= upgrade.getExtraEnergyCapacity(stack, this.tileEntity);
         }
         if (upgrade.type == "efficiency") {
            this.progressEnergyMultiplier *= upgrade.getEnergyMultiplier(stack, this.tileEntity)
            this.progressPowerMultiplier += upgrade.getPowerMultiplier(stack, this.tileEntity)
            this.speedModifier += upgrade.getSpeed(stack, this.tileEntity);
         }
         if ("onTick" in upgrade) {
            upgrade.onTick(stack, this.tileEntity);
         }
      }
      // get data from Tile Entity
      getBaseValue(defaultBaseValue: number): number {
         return this.baseValueMultiplier * defaultBaseValue
      }

      getProgressEnergy(defaultEnergy: number): number {
         return defaultEnergy * this.progressEnergyMultiplier;
      }

      getProgressPower(defaultPower: number): number {
         return defaultPower * this.progressPowerMultiplier;
      }

      getEnergyCapacity(defaultEnergyCapacity: number): number {
         const energyCapacity = defaultEnergyCapacity * this.extraEnergyCapacity;
         const tileData = this.tileEntity.data;
         tileData.energy = Math.min(tileData.energy, energyCapacity);
         return energyCapacity;
      }

      getEnergyTranfer(defaultEnergyTranfer: number): number {
         return defaultEnergyTranfer * this.extraEnergyTranfer
      }

      getSpeed(defaultSpeed: number): number {
         return defaultSpeed * this.speedModifier
      }
   }
}