namespace MaterialRegistry {
   export function addOreDrop(id: string, oreLevel: number): void {
      let ore = "ore" + id.charAt(0).toUpperCase() + id.slice(1); // ore which you dig
      let raw = "raw" + id.charAt(0).toUpperCase() + id.slice(1); // raw drop
      BlockRegistry.registerDrop(ore, (blockCoords: Callback.ItemUseCoordinates, blockID: number, blockData: number, diggingLevel: number, enchant: ToolAPI.EnchantData, item: ItemInstance, region: BlockSource): ItemInstanceArray[] => {
         if (diggingLevel >= oreLevel) {
            if (enchant.silk) {
               return [[blockID, 1, 0]];
            }
            let drop: ItemInstanceArray[] = [[ItemID[raw], 1 + randomInt(0, (enchant ? enchant.fortune : 0) + 1), 0]];
            ToolAPI.dropOreExp(blockCoords, 12, 28, enchant.experience);
            return drop;
         }
         return [];
      });
   }
}
MaterialRegistry.addOreDrop("copper", 1);
MaterialRegistry.addOreDrop("tin", 1);
MaterialRegistry.addOreDrop("silver", 2);
MaterialRegistry.addOreDrop("lead", 2);
MaterialRegistry.addOreDrop("nickel", 2);


BlockRegistry.registerDrop("oreSulfur", (blockCoords: Callback.ItemUseCoordinates, blockID: number, blockData: number, diggingLevel: number, enchant: ToolAPI.EnchantData, item: ItemInstance, region: BlockSource): ItemInstanceArray[] => {
   if (diggingLevel >= 2) {
      if (enchant.silk) {
         return [[blockID, 1, 0]];
      }
      let drop: ItemInstanceArray[] = [[ItemID.sulfur, 1, 0]];
      if (Math.random() < enchant.fortune / 6) {
         drop[0][1] = MathHelper.randomInt(3, 5)
         drop.push(drop[0]);
      }
      ToolAPI.dropOreExp(blockCoords, 12, 28, enchant.experience);
      return drop;
   }
   return [];
});

BlockRegistry.registerDrop("oreCinnabar", (blockCoords: Callback.ItemUseCoordinates, blockID: number, blockData: number, diggingLevel: number, enchant: ToolAPI.EnchantData, item: ItemInstance, region: BlockSource): ItemInstanceArray[] => {
   if (diggingLevel >= 2) {
      if (enchant.silk) {
         return [[blockID, 1, 0]];
      }
      let drop: ItemInstanceArray[] = [[ItemID.cinnabar, 1, 0]];
      if (Math.random() < enchant.fortune / 6) {
         drop[0][1] = MathHelper.randomInt(3, 5)
         drop.push(drop[0]);
      }
      ToolAPI.dropOreExp(blockCoords, 12, 28, enchant.experience);
      return drop;
   }
   return [];
});

BlockRegistry.registerDrop("oreNiter", (blockCoords: Callback.ItemUseCoordinates, blockID: number, blockData: number, diggingLevel: number, enchant: ToolAPI.EnchantData, item: ItemInstance, region: BlockSource): ItemInstanceArray[] => {
   if (diggingLevel >= 2) {
      if (enchant.silk) {
         return [[blockID, 1, 0]];
      }
      let drop: ItemInstanceArray[] = [[ItemID.niter, 1, 0]];
      if (Math.random() < enchant.fortune / 6) {
         drop[0][1] = MathHelper.randomInt(3, 5)
         drop.push(drop[0]);
      }
      ToolAPI.dropOreExp(blockCoords, 12, 28, enchant.experience);
      return drop;
   }
   return [];
});

BlockRegistry.registerDrop("oreSapphire", (blockCoords: Callback.ItemUseCoordinates, blockID: number, blockData: number, diggingLevel: number, enchant: ToolAPI.EnchantData, item: ItemInstance, region: BlockSource): ItemInstanceArray[] => {
   if (diggingLevel > 2) {
      if (enchant.silk) {
         return [[blockID, 1, 0]];
      }
      let drop: ItemInstanceArray[] = [[ItemID.sapphire, 1, 0]];
      if (Math.random() < enchant.fortune / 6) {
         drop[0][1] = MathHelper.randomInt(1, 2)
         drop.push(drop[0]);
      }
      ToolAPI.dropOreExp(blockCoords, 12, 28, enchant.experience);
      return drop;
   }
   return [];
});

BlockRegistry.registerDrop("oreRuby", (blockCoords: Callback.ItemUseCoordinates, blockID: number, blockData: number, diggingLevel: number, enchant: ToolAPI.EnchantData, item: ItemInstance, region: BlockSource): ItemInstanceArray[] => {
   if (diggingLevel > 2) {
      if (enchant.silk) {
         return [[blockID, 1, 0]];
      }
      let drop: ItemInstanceArray[] = [[ItemID.ruby, 1, 0]];
      if (Math.random() < enchant.fortune / 6) {
         drop[0][1] = MathHelper.randomInt(1, 2)
         drop.push(drop[0]);
      }
      ToolAPI.dropOreExp(blockCoords, 12, 28, enchant.experience);
      return drop;
   }
   return [];
});


BlockRegistry.registerDrop("oreApatite", (blockCoords: Callback.ItemUseCoordinates, blockID: number, blockData: number, diggingLevel: number, enchant: ToolAPI.EnchantData, item: ItemInstance, region: BlockSource): ItemInstanceArray[] => {
   if (diggingLevel > 2) {
      if (enchant.silk) {
         return [[blockID, 1, 0]];
      }
      let drop: ItemInstanceArray[] = [[ItemID.apatite, 1, 0]];
      if (Math.random() < enchant.fortune / 6) {
         drop[0][1] = MathHelper.randomInt(1, 2)
         drop.push(drop[0]);
      }
      ToolAPI.dropOreExp(blockCoords, 12, 28, enchant.experience);
      return drop;
   }
   return [];
});

Callback.addCallback("GenerateChunk", (chunkX: number, chunkZ: number, random: java.util.Random,
   dimensionId: number, chunkSeed: number, worldSeed: number, dimensionSeed: number): void => {
   //Mithril и Iridium не генерируются в мире
   let ores = ["copper", "tin", "silver", "lead", "nickel", "sulfur", "cinnabar", "niter", "sapphire", "apatite"];

   for (let i in ores) {
      let ore = ores[i];
      let gen = ThermalConfig.gen[ore];
      let ore_id = `ore${ore.charAt(0).toUpperCase() + ore.slice(1)}`
      if (gen.enabled) {
         UniqueGen.generateOre(BlockID[ore_id], 0, chunkX, chunkZ, random, {
            veinCounts: gen.inChunk,
            minY: gen.minY,
            maxY: gen.maxY,
            size: gen.size
         });
      }
   }
});