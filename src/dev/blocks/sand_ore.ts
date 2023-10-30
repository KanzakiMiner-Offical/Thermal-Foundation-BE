class SandOil extends BlockBase {
  constructor(id: string, time: number, miningLevel: number) {
    let _id = "sand" + id.charAt(0).toUpperCase() + id.slice(1);
    super(id, "ore");
    const name = `block.thermal.${id}_sand`;
    const textureName = id + "_sand";
    this.addVariation(name, [[textureName, 0]], true);
    this.setBlockMaterial("dirt", miningLevel);
    this.setDestroyTime(time)
  }
}
BlockRegistry.registerBlock(new SandOil("oil", 0.5, 0));
ItemRegistry.createItem("bitumen", { name: "item.thermal.bitumen", icon: "bitumen" });

BlockRegistry.registerDrop("sandOil", function (coords, blockID, blockData, level, enchant) {
  if (level > 0) {
    if (enchant.silk) {
      return [[blockID, 1, 0]];
    }
    let drop: ItemInstanceArray[] = [[ItemID.bitumen, 1, 0]]
    if (Math.random() < enchant.fortune / 6)
      drop.push(drop[0]);
    ToolAPI.dropOreExp(coords, 12, 28, enchant.experience);
    return drop;
  }
  return [];
});

Callback.addCallback("GenerateChunk", (chunkX: number, chunkZ: number, random: java.util.Random,
  dimensionId: number, chunkSeed: number, worldSeed: number, dimensionSeed: number): void => {
  //Mithril и Iridium не генерируются в мире
  if (ThermalConfig.gen.oilSand.enabled) {
    UniqueGen.generateSandOre(BlockID.sandOil, 0, chunkX, chunkZ, random, {
      size: ThermalConfig.gen.oilSand.size,
      veinCounts: MathHelper.randomInt(8, 15)
    })
  }
});
