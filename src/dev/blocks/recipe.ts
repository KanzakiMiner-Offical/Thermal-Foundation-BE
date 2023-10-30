namespace MaterialRegistry {
  export function addAllFurnace() {
    for (let i in ingotData) {
      let id = ingotData[i];
      let name = id.charAt(0).toUpperCase() + id.slice(1);
      Recipes.addFurnace(ItemID["dust" + name], 0, ItemID["ingot" + name], 0);
    }
    for (let e in oreName) {
      let id = oreName[e];
      let name = id.charAt(0).toUpperCase() + id.slice(1);
      Recipes.addFurnace(BlockID["ore" + name], 0, ItemID["ingot" + name], 0);
      Recipes.addFurnace(ItemID["raw" + name], 0, ItemID["ingot" + name], 0);
    }
  }

  export function addOtherFurnace(id: string[]) {
    for (let i in id) {
      let id_other = id[i]
      let name = id_other.charAt(0).toUpperCase() + id_other.slice(1);
      Recipes.addFurnace(ItemID["dust" + name], 0, ItemID[id_other], 0);
      Recipes.addFurnace(BlockID["ore" + name], 0, ItemID[id_other], 0);
    }
  }
}
Callback.addCallback("PreLoaded", function () {
  MaterialRegistry.addAllFurnace();
  MaterialRegistry.addOtherFurnace(TF_OTHER_ORES);
});
//bitumen.png