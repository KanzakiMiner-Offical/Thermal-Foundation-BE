ItemRegistry.createItem("raw_rubber", { name: "item.thermal.rubber", icon: "tf_rubber" });
ItemRegistry.createItem("cured_rubber", { name: "item.thermal.cured_rubber", icon: "tf_cured_rubber" })

Callback.addCallback("PreLoaded", function() {
  Recipes.addFurnace(ItemID.raw_rubber, ItemID.cured_rubber, 0);
  Recipes.addShaped({ id: ItemID.raw_rubber, count: 1, data: 0 }, [
		"aaa",
		"aca",
		"aaa"
	], ['a', 106, -1, 'c', VanillaItemID.water_bucket, 0], function(api, field, result) {
    for (let i = 0; i < field.length; i++) {
      if (field[i].id == VanillaItemID.water_bucket) {
        field[i].id = VanillaItemID.bucket
        field[i].data = 0;
      } else {
        api.decreaseFieldSlot(i);
      }
    }
  });
});