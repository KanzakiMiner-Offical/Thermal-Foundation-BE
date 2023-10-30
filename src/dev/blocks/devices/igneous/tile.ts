namespace Machine {
  export class DeviceIgneous extends DeviceMachine {
    defaultValues = {
      progress: 0,
    }
    defaultBaseMod = 1;
    adjacent: string;
    lava: boolean;
    below: string;

    getScreenByName(): UI.IWindow {
      return igneousUI
    }

    getAdjacent(): void {
      if ((this.region.getBlockId(this.x + 1, this.y, this.z) === VanillaBlockID.water ||
          this.region.getBlockId(this.x - 1, this.y, this.z) === VanillaBlockID.water ||
          this.region.getBlockId(this.x, this.y, this.z + 1) === VanillaBlockID.water ||
          this.region.getBlockId(this.x, this.y, this.z - 1) === VanillaBlockID.water)) {
        this.adjacent = "water"
      } else if ((this.region.getBlockId(this.x + 1, this.y, this.z) === VanillaBlockID.blue_ice ||
          this.region.getBlockId(this.x - 1, this.y, this.z) === VanillaBlockID.blue_ice ||
          this.region.getBlockId(this.x, this.y, this.z + 1) === VanillaBlockID.blue_ice ||
          this.region.getBlockId(this.x, this.y, this.z - 1) === VanillaBlockID.blue_ice) ||
        (this.region.getBlockId(this.x + 1, this.y, this.z) === VanillaTileID.blue_ice ||
          this.region.getBlockId(this.x - 1, this.y, this.z) === VanillaTileID.blue_ice ||
          this.region.getBlockId(this.x, this.y, this.z + 1) === VanillaTileID.blue_ice ||
          this.region.getBlockId(this.x, this.y, this.z - 1) === VanillaTileID.blue_ice)) {
        this.adjacent = "ice"
      }
    }

    getLava(): void {
      if (this.region.getBlockId(this.x + 1, this.y, this.z) === VanillaBlockID.lava ||
        this.region.getBlockId(this.x - 1, this.y, this.z) === VanillaBlockID.lava ||
        this.region.getBlockId(this.x, this.y, this.z + 1) === VanillaBlockID.lava ||
        this.region.getBlockId(this.x, this.y, this.z - 1) === VanillaBlockID.lava) {
        this.lava = true
      }
    }

    getBelow(): void {
      if (this.region.getBlockId(this.x, this.y - 1, this.z) === VanillaBlockID.soul_soil) {
        this.below = "soul"
      } else if (this.region.getBlockId(this.x, this.y - 1, this.z) === VanillaBlockID.magma) {
        this.below = "magma"
      }
    }

    updateData(): void {
      this.below = this.adjacent = this.lava = null
      this.getLava();
      this.getAdjacent();
      this.getBelow();

      let icon1 = this.container.getSlot("icon1");
      let icon2 = this.container.getSlot("icon2");
      let icon3 = this.container.getSlot("icon3");

      switch (this.adjacent) {
        case "ice":
          icon1.id = VanillaBlockID.blue_ice;
          icon1.data = 0;
          icon1.count = 1;
          break;
        case "water":
          icon1.id = BlockID.tf_water;
          icon1.data = 0;
          icon1.count = 1;
          break;
        default:
          icon1.id = icon1.data = icon1.count = 0;
      }
      switch (this.below) {
        case "soul":
          icon3.id = VanillaBlockID.soul_soil;
          icon3.data = 0;
          icon3.count = 1;
          break;
        case "magma":
          icon3.id = VanillaBlockID.magma;
          icon3.data = 0;
          icon3.count = 1;
          break;
        default:
          icon3.id = icon3.data = icon3.count = 0;
      }
      if (this.lava) {
        icon2.id = BlockID.tf_lava;
        icon2.data = 0;
        icon2.count = 1
      } else
        icon2.id = icon2.data = icon2.count = 0
    }

    onTick(): void {
      this.useUpgrade();
      StorageInterface.checkHoppers(this);
      let icon1 = this.container.getSlot("icon1");
      let icon2 = this.container.getSlot("icon2");
      let icon3 = this.container.getSlot("icon3");
      switch (this.adjacent) {
        case "ice":
          icon1.id = VanillaBlockID.blue_ice;
          icon1.data = 0;
          icon1.count = 1;
          break;
        case "water":
          icon1.id = BlockID.tf_water;
          icon1.data = 0;
          icon1.count = 1;
          break;
        default:
          icon1.id = icon1.data = icon1.count = 0;
      }
      switch (this.below) {
        case "soul":
          icon3.id = VanillaBlockID.soul_soil;
          icon3.data = 0;
          icon3.count = 1;
          break;
        case "magma":
          icon3.id = VanillaBlockID.magma;
          icon3.data = 0;
          icon3.count = 1;
          break;
        default:
          icon3.id = icon3.data = icon3.count = 0;
      }
      if (this.lava) {
        icon2.id = BlockID.tf_lava;
        icon2.data = 0;
        icon2.count = 1
      } else
        icon2.id = icon2.data = icon2.count = 0

      let pre_adjacent = this.adjacent;
      let pre_below = this.below;
      this.updateData();

      let slotResult = this.container.getSlot("slotResult");
      if (pre_adjacent != this.adjacent || !this.lava || pre_below != this.below) {
        this.data.progress = 0;
      }
      let genAmount = this.baseMod;
      if (this.lava) {
        switch (this.adjacent) {
          case "ice":
            if (this.below == "soul") {
              if ((slotResult.id == VanillaBlockID.basalt && slotResult.data == 0 && slotResult.count + genAmount < 64) || slotResult.id == 0) {
                this.data.progress++
                if (this.data.progress >= 80) {
                  slotResult.id = VanillaBlockID.basalt;
                  slotResult.data = 0;
                  slotResult.count += genAmount;
                  slotResult.markDirty();
                  this.data.progress = 0
                }
              }
            }
            break;
          case "water":
            if (this.below == "magma") {
              if ((slotResult.id == VanillaBlockID.stone && slotResult.data == 0 && slotResult.count + genAmount < 64) || slotResult.id == 0) {
                this.data.progress++
                if (this.data.progress >= 80) {
                  slotResult.id = VanillaBlockID.stone;
                  slotResult.data = 0;
                  slotResult.count += genAmount;
                  slotResult.markDirty();
                  this.data.progress = 0
                }
              }
            } else {
              if ((slotResult.id == VanillaBlockID.cobblestone && slotResult.data == 0 && slotResult.count + genAmount < 64) || slotResult.id == 0) {
                this.data.progress++
                if (this.data.progress >= 80) {
                  slotResult.id = VanillaBlockID.cobblestone;
                  slotResult.data = 0;
                  slotResult.count += genAmount;
                  slotResult.markDirty();
                  this.data.progress = 0
                }
              }
            }
            break;
        }
      }
      this.container.setScale("progressScale", this.data.progress / 80);
      this.container.sendChanges()
    }
  }
  MachineRegistry.createMachineStorageInterface(BlockID.thermalDeviceIgneous, {
    slots: {
      "icon1": { output: false, input: false },
      "icon2": { output: false, input: false },
      "icon3": { output: false, input: false },
      "slotResult": { output: true }
    }
  });
  MachineRegistry.registerPrototype(BlockID.thermalDeviceIgneous, new DeviceIgneous());
  MachineRegistry.setStoragePlaceFunction("thermalDeviceIgneous", true)
}