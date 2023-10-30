ItemRegistry.createItem("tf_information", { name: "Information", icon: "information", stack: 1 });
ItemRegistry.createItem("tf_augments", { name: "Augments", icon: "augments", stack: 1 });
ItemRegistry.createItem("tf_config", { name: "Config", icon: "config", stack: 1 });
ItemRegistry.createItem("tf_energy", { name: "Energy", icon: "energy", stack: 1 });


BlockRegistry.createBlock("tf_lava", [
  {
    name: "lava icon",
    texture: [["lava_placeholder", 0]],
    inCreative: true
  }
]);

BlockRegistry.createBlock("tf_water", [
  {
    name: "water icon",
    texture: [["water_placeholder", 0]],
    inCreative: true
  }
])