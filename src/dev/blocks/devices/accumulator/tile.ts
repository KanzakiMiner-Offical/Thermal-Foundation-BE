namespace Machine {
  export class DeviceAccumulator extends DeviceMachine {
    defaultValues = {
      progress: 0,
    }
    defaultBaseMod = 1;
    liquidTank: BlockEngine.LiquidTank;

    setupContainer(): void {
      this.liquidTank = this.addLiquidTank("fluid", 6000, ["water"]);
    }

    getScreenByName(): UI.IWindow {
      return accumulatorUI
    }

    getWater(): boolean {
      if (this.region.getBlockId(this.x + 1, this.y, this.z) === VanillaBlockID.water ||
        this.region.getBlockId(this.x - 1, this.y, this.z) === VanillaBlockID.water ||
        this.region.getBlockId(this.x, this.y, this.z + 1) === VanillaBlockID.water ||
        this.region.getBlockId(this.x, this.y, this.z - 1) === VanillaBlockID.water) {
        return true
      }
      return false
    }

    onTick(): void {
      this.useUpgrade();
      let produce_water = 250 * this.baseMod;
      if (this.getWater()) {
        this.liquidTank.addLiquid("water", produce_water)
      }
      let slot1 = this.container.getSlot("slotContainer");
      let slot2 = this.container.getSlot("slotFilledContainer");
      this.liquidTank.addLiquidToItem(slot1, slot2);
      this.liquidTank.updateUiScale("liquidScale");
      this.container.sendChanges()
    }
  }

  MachineRegistry.registerPrototype(BlockID.thermalDeviceAccumulator, new DeviceAccumulator());
  MachineRegistry.createStorageInterface(BlockID.thermalDeviceAccumulator, {
    canReceiveLiquid: () => false,
    canTransportLiquid: () => true
  });
  MachineRegistry.setStoragePlaceFunction("thermalDeviceAccumulator", true);
}