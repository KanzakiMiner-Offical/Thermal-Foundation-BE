// Redstone Flux Coil
ItemRegistry.createItem("rf_coil", { name: "item.thermal.rubber", icon: "rf_coil" });

Callback.addCallback("PreLoaded", function() {
  Recipes.addShaped({ id: ItemID["rf_coil"], count: 1, data: 0 }, [
      "  f",
      " h ",
      "f  ",
   ], ['f', VanillaItemID["redstone"], 0, 'h', VanillaItemID["gold_ingot"], 0]);
})

// Redstone Servo
ItemRegistry.createItem("redstone_servo", { name: "item.thermal.redstone_servo", icon: "redstone_servo" });

Callback.addCallback("PreLoaded", function() {
  Recipes.addShaped({ id: ItemID["redstone_servo"], count: 1, data: 0 }, [
      " f ",
      " h ",
      " f ",
   ], ['f', VanillaItemID["redstone"], 0, 'h', VanillaItemID["iron_ingot"], 0]);
});

// Saw Blade
ItemRegistry.createItem("saw_blade", { name: "item.thermal.saw_blade", icon: "saw_blade" });

Callback.addCallback("PreLoaded", function() {
  Recipes.addShaped({ id: ItemID["saw_blade"], count: 1, data: 0 }, [
      "hh ",
      "hfh",
      " hh",
   ], ['f', ItemID["ingotCopper"], 0, 'h', VanillaItemID["iron_ingot"], 0]);
})