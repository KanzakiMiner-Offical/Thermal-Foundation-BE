class UpgradeRF_Coil extends AugmentModule
implements ItemBehavior {
   type = "redstone_flux";
   data: {
      storage: number,
      xfer: number
   };
   desc: string;

   constructor(stringID: string, name: string, data: {
      storage: number,
      xfer: number
   }) {
      let icon = { name: name, data: 0 };
      super(stringID, name, icon)
      this.data = data
      //this.desc = `item.thermal.${name}.desc`
   }

   onNameOverride(item: ItemInstance, name: string): string {
      return `${name}`
   }

   getExtraEnergyTranfer(item: ItemInstance): number {
      return this.data.xfer;
   }
   
   getExtraEnergyCapacity(item: ItemInstance): number {
      return this.data.storage;
   }
}

ItemRegistry.registerItem(new UpgradeRF_Coil("upgradeRFCoil", "rf_coil_augment", {
   storage: 4,
   xfer: 4
}));

ItemRegistry.registerItem(new UpgradeRF_Coil("upgradeRFCoilStorage", "rf_coil_storage_augment", {
   storage: 6,
   xfer: 2
}));

ItemRegistry.registerItem(new UpgradeRF_Coil("upgradeRFCoilXfer", "rf_coil_xfer_augment", {
   storage: 2,
   xfer: 6
}));

ItemRegistry.registerItem(new UpgradeRF_Coil("upgradeRFCoilCreative", "rf_coil_creative_augment", {
   storage: 16,
   xfer: 16
}));