namespace ThermalFluid {
  export let fluid_data = [];
  export function registerLiquid(id: string, name: string, isBucket: boolean = false) {
    // reg liquid (id = id liquid,name = name liquid)
    // creosote_bucket.png
    let texture_liquid = id + "_still";
    LiquidRegistry.registerLiquid(id, name, [texture_liquid]);
    // reg storage item
    if (isBucket) {
      let bucketId = "bucket" + id.charAt(0).toUpperCase() + id.slice(1)
      IDRegistry.genItemID(bucketId);
      Item.createItem(bucketId, name + " Bucket", { name: id + "_bucket" }, { stack: 1 });
      // add storage
      LiquidItemRegistry.registerItem(id, VanillaItemID.bucket, ItemID[bucketId], 1000);
    }
    this.fluid_data.push(id)
  }
}

ThermalFluid.registerLiquid("ender", "Resonant Ender", true);
ThermalFluid.registerLiquid("redstone", "Destabilized Redstone", true);
ThermalFluid.registerLiquid("glowstone", "Energizee Glowstone", true);
ThermalFluid.registerLiquid("honey", "Honey", true);
ThermalFluid.registerLiquid("experience", "Experience");
ThermalFluid.registerLiquid("latex", "Latex", true);
