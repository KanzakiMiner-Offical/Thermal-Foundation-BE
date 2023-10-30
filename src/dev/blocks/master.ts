namespace MaterialRegistry {
  export function addBlockRecipe() {
    for (let i in ingotData) {
      let id = ingotData[i];
      let _id = id.charAt(0).toUpperCase() + id.slice(1);
      Recipes.addShaped({ id: BlockID["block" + _id], count: 1, data: 0 }, [
            "fff",
            "fff",
            "fff",
        ], ['f', ItemID["ingot" + _id], 0]);
      Recipes.addShapeless({ id: ItemID["ingot" + _id], count: 9, data: 0 }, [{ id: BlockID["block" + _id], data: 0 }]);
    }
  }

  export function addOtherBlockRecipe(id) {
    let _id = id.charAt(0).toUpperCase() + id.slice(1);
    Recipes.addShaped({ id: BlockID["block" + _id], count: 1, data: 0 }, [
         "fff",
         "fff",
         "fff",
      ], ['f', ItemID[id], 0]);
    Recipes.addShapeless({ id: ItemID[id], count: 9, data: 0 }, [{ id: BlockID["block" + _id], data: 0 }]);
  }
}

Callback.addCallback("PreLoaded", function() {
  MaterialRegistry.addBlockRecipe();

  for (let i in TF_OTHER_ORES) {
    let id_other = TF_OTHER_ORES[i];
    MaterialRegistry.addOtherBlockRecipe(id_other)
  }
});