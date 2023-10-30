// legacy
BlockRegistry.createBlockType("glass_type_hardened", {
  solid: false,
  destroyTime: 2,
  sound: "glass",
  explosionResistance: 3600000 * 3,
  renderLayer: 1,
});

class ThermalGlass extends BlockBase {
  constructor(id: string, name: string, texture: [string, number][], miningLevel: number = 1) {
    super(id, "glass_type_hardened");
    this.addVariation(name, texture, true);
    this.setBlockMaterial("stone", miningLevel);
    this.setDestroyTime(2);
  }
}

BlockRegistry.registerBlock(new ThermalGlass("hardenedGlassObsidian", "block.thermal.obsidian_glass", [["obsidian_glass", 0]]));
BlockRegistry.registerBlock(new ThermalGlass("hardenedGlassSignalum", "block.thermal.signalum_glass", [["signalum_glass", 0]]));
BlockRegistry.registerBlock(new ThermalGlass("hardenedGlassEnderium", "block.thermal.enderium_glass", [["enderium_glass", 0]]));
Block.setupAsRedstoneEmitter("hardenedGlassSignalum", true)

class LumiumGlass extends BlockBase {
  constructor(id: string, name: string, texture: [string, number][], miningLevel: number = 1) {
    super(id, "glass_type_hardened");
    this.addVariation(name, texture, true);
    this.setBlockMaterial("stone", miningLevel);
    this.setDestroyTime(2);
    this.setLightLevel(15);
  }
}

BlockRegistry.registerBlock(new LumiumGlass("hardenedGlassLumium", "block.thermal.lumium_glass", [["lumium_glass", 0]]));

ConnectedTexture.setModelForGlass(BlockID.hardenedGlassObsidian, -1, "obsidian_glass");
ConnectedTexture.setModelForGlass(BlockID.hardenedGlassSignalum, -1, "signalum_glass");
ConnectedTexture.setModelForGlass(BlockID.hardenedGlassLumium, -1, "lumium_glass");
ConnectedTexture.setModelForGlass(BlockID.hardenedGlassEnderium, -1, "enderium_glass");
