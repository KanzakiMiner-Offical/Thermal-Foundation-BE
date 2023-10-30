let jungle_biomes = {
   21: true,
   22: true,
   23: true,
   149: true,
   151: true,
   155: true,
   156: true,
   157: true,
   158: true,
   168: true,
   169: true,
};
// 1.16
let EnchantData = [
   {
      id: 7,
      level: 1,
      chance: 2
   }, //AQUA_AFFINITY HELMET
   {
      id: 11,
      level: 5,
      chance: 5
   }, //BANE_OF_ARTHROPODS WEAPON
   {
      id: 27,
      level: 1,
      chance: 1
   }, //BINDING_CURSE ALL
   {
      id: 3,
      level: 4,
      chance: 5
   }, //BLAST_PROTECTION ARMOR
   {
      id: 32,
      level: 1,
      chance: 1
   }, //CHANNELING TRIDENT
   {
      id: 8,
      level: 3,
      chance: 2
   }, //DEPTH_STRIDER BOOT
   {
      id: 15,
      level: 5,
      chance: 10
   }, //EFFICIENCY TOOL
   {
      id: 2,
      level: 4,
      chance: 5
   }, //FEATHER_FALLING BOOT
   {
      id: 13,
      level: 2,
      chance: 2
   }, //FIRE_ASPECT SWORD
   {
      id: 1,
      level: 4,
      chance: 5
   }, //FIRE_PROTECTION ALL
   {
      id: 21,
      level: 1,
      chance: 2
   }, //FLAME BOW
   {
      id: 18,
      level: 3,
      chance: 2
   }, //FORTUNE TOOL
   {
      id: 25,
      level: 2,
      chance: 2
   }, //FROST_WALKER BOOT
   {
      id: 29,
      level: 5,
      chance: 2
   }, //IMPALING ALL
   {
      id: 22,
      level: 1,
      chance: 1
   }, //INFINITY BOW
   {
      id: 12,
      level: 2,
      chance: 5
   }, //KNOCKBACK WEAPON
   {
      id: 14,
      level: 3,
      chance: 2
   }, //LOOTING WEAPON
   {
      id: 31,
      level: 3,
      chance: 5
   }, //LOYALTY TRIDNET
   {
      id: 23,
      level: 3,
      chance: 2
   }, //LUCK_OF_THE_SEA FISHING ROD
   {
      id: 24,
      level: 3,
      chance: 2
   }, //LURE FISHING
   {
      id: 26,
      level: 1,
      chance: 2
   }, //MENDING ALL 
   {
      id: 19,
      level: 5,
      chance: 10
   }, //POWER BOW
   {
      id: 4,
      level: 4,
      chance: 5
   }, //PROJECTILE_PROTECTION ARMOR
   {
      id: 0,
      level: 4,
      chance: 10
   }, //PROTECTION ARMONR
   {
      id: 20,
      level: 2,
      chance: 2
   }, //PUNCH BOW
   {
      id: 6,
      level: 3,
      chance: 2
   }, //RESPIRATION HELMET
   {
      id: 30,
      level: 3,
      chance: 2
   }, //RIPTIDE TRIDENT
   {
      id: 9,
      level: 5,
      chance: 5
   }, //SHARPNESS WEAPON
   {
      id: 16,
      level: 1,
      chance: 1
   }, //SILK_TOUCH TOOLS
   {
      id: 10,
      level: 5,
      chance: 5
   }, //SMITE WEAPON
   {
      id: 5,
      level: 3,
      chance: 1
   }, //THORNS CHESTPLATE
   {
      id: 17,
      level: 3,
      chance: 5
   }, //UNBREAKING ALL
   {
      id: 28,
      level: 1,
      chance: 1
   }, //VANISHING_CURSE ARMOR
];
let EnchantData_bow = [
   {
      id: 21,
      level: 1,
      chance: 2
   }, //FLAME BOW
   {
      id: 29,
      level: 5,
      chance: 2
   }, //IMPALING ALL
   {
      id: 22,
      level: 1,
      chance: 1
   }, //INFINITY BOW
   {
      id: 26,
      level: 1,
      chance: 2
   }, //MENDING ALL 
   {
      id: 19,
      level: 5,
      chance: 10
   }, //POWER BOW
   {
      id: 20,
      level: 2,
      chance: 2
   }, //PUNCH BOW
   {
      id: 17,
      level: 3,
      chance: 5
   }, //UNBREAKING ALL
   {
      id: 28,
      level: 1,
      chance: 1
   }
];
let EnchantData_fishing = [
   {
      id: 29,
      level: 5,
      chance: 2
   }, //IMPALING ALL
   {
      id: 23,
      level: 3,
      chance: 2
   }, //LUCK_OF_THE_SEA FISHING ROD
   {
      id: 24,
      level: 3,
      chance: 2
   }, //LURE FISHING
   {
      id: 26,
      level: 1,
      chance: 2
   }, //MENDING ALL 
   {
      id: 17,
      level: 3,
      chance: 5
   }, //UNBREAKING ALL
   {
      id: 28,
      level: 1,
      chance: 1
   }, //VANISHING_CURSE ALL
];
namespace FishingLoot {
   export type type_fishing = {
      type: string,
      chance: number
   };
   export type loot_fishing = {
      id: number,
      data: number,
      count: number,
      chance: number,
      extra_func?: any,
   }
   export let junk: loot_fishing[] = [];
   export let fish: loot_fishing[] = [];
   export let jug_junk: loot_fishing[] = [];
   export let jug_fish: loot_fishing[] = [];
   export let treasure: loot_fishing[] = [];

   export let fishing_logic: type_fishing[] = [
      { type: "junk", chance: 10 },
      { type: "treasure", chance: 5 },
      { type: "fish", chance: 85 }
   ];

   export let jungle_fishing_logic: type_fishing[] = [
      { type: "jungle_junk", chance: 10 },
      { type: "treasure", chance: 5 },
      { type: "jungle_fish", chance: 85 }
   ];

   export function addLootable(type: string, id: number, data: number = 0, count: number = 1, chance: number, extra_func?: any): void {
      switch (type) {
         case "fish":
            fish.push({ id: id, data: data, count: count, chance: chance, extra_func: extra_func || null })
            break;
         case "jungle_fish":
            jug_fish.push({ id: id, data: data, count: count, chance: chance, extra_func: extra_func || null })
            break;
         case "junk":
            junk.push({ id: id, data: data, count: count, chance: chance, extra_func: extra_func || null })
            break;
         case "jungle_junk":
            jug_junk.push({ id: id, data: data, count: count, chance: chance, extra_func: extra_func || null })
            break;
         case "treasure":
            treasure.push({ id: id, data: data, count: count, chance: chance, extra_func: extra_func || null })
            break;
      }
   }

   export function randomLootArray(input_array: loot_fishing[]): loot_fishing {
      let total = 0;
      for (let i in input_array) {
         total += input_array[i].chance;
      }
      let random = Math.random() * total * 1.4;
      let current = 0;
      for (let i in input_array) {
         let drop = input_array[i];
         if (current < random && current + drop.chance > random) {
            return drop;
         }
         current += drop.chance;
      }
      return {
         id: 0,
         data: 0,
         count: 0,
         chance: 0
      };
   }
   export function randomTypeArray(input_array: type_fishing[]): type_fishing {
      let total = 0;
      for (let i in input_array) {
         total += input_array[i].chance;
      }
      let random = Math.random() * total * 1.4;
      let current = 0;
      for (let i in input_array) {
         let drop = input_array[i];
         if (current < random && current + drop.chance > random) {
            return drop;
         }
         current += drop.chance;
      }
      return { type: "junk", chance: 10 };
   }

   export function randomEnchantArray(input_array: typeof EnchantData): {
      id: number;
      level: number;
      chance: number;
   } {
      let total = 0;
      for (let i in input_array) {
         total += input_array[i].chance;
      }
      let random = Math.random() * total * 1.4;
      let current = 0;
      for (let i in input_array) {
         let drop = input_array[i];
         if (current < random && current + drop.chance > random) {
            return drop;
         }
         current += drop.chance;
      }
      return;
   }

   export function randomLootFromBiomes(isJungle: boolean | number) {
      if (!isJungle) return;
      if (typeof isJungle == "number") {
         isJungle = jungle_biomes[isJungle];
      }
      if (isJungle)
         return randomTypeArray(jungle_fishing_logic).type
      else
         return randomTypeArray(fishing_logic).type
   }

   export function randomLootFish(type: string) {
      if (!type) return;
      switch (type) {
         case "junk":
            return randomLootArray(junk)
            break;
         case "fish":
            return randomLootArray(fish)
            break;
         case "jungle_fish":
            return randomLootArray(jug_fish)
            break;
         case "jungle_junk":
            return randomLootArray(jug_junk)
            break;
         case "treasure":
            return randomLootArray(treasure)
            break;
      }
   }

   // enchanted!
   export function randomEnchantFromType(type) {
      if (!type) return;
      switch (type) {
         case "all":
            return randomEnchantArray(EnchantData)
            break;
         case "bow":
            return randomEnchantArray(EnchantData_bow)
            break;
         case "fishing":
            return randomEnchantArray(EnchantData_fishing)
            break;
      }
   };
}
// fish
FishingLoot.addLootable("fish", VanillaItemID.fish, 0, 1, 60);
FishingLoot.addLootable("fish", VanillaItemID.salmon, 0, 1, 25);
FishingLoot.addLootable("fish", VanillaItemID.clownfish, 0, 1, 2);
FishingLoot.addLootable("fish", VanillaItemID.pufferfish, 0, 1, 13);
// junk
FishingLoot.addLootable("junk", VanillaItemID.leather, 0, 1, 10);
FishingLoot.addLootable("junk", VanillaItemID.bone, 0, 1, 10);
FishingLoot.addLootable("junk", VanillaItemID.potion, 0, 1, 10);
FishingLoot.addLootable("junk", VanillaItemID.string, 0, 1, 5);
FishingLoot.addLootable("junk", VanillaItemID.fishing_rod, 0, 1, 2, {
   set_damage: {
      "min": 0,
      "max": 90
   }
});
FishingLoot.addLootable("junk", VanillaItemID.bowl, 0, 1, 10);
FishingLoot.addLootable("junk", VanillaItemID.stick, 0, 1, 5);
FishingLoot.addLootable("junk", VanillaItemID.ink_sac, 0, 10, 1);
FishingLoot.addLootable("junk", VanillaItemID.rotten_flesh, 0, 1, 10);
FishingLoot.addLootable("junk", VanillaBlockID.tripwire_hook, 0, 1, 10);
FishingLoot.addLootable("junk", VanillaItemID.leather_boots, 0, 1, 10, {
   set_damage: {
      "min": 0,
      "max": 90
   }
});
// treasure
FishingLoot.addLootable("treasure", VanillaItemID.nautilus_shell, 0, 1, 5);
FishingLoot.addLootable("treasure", VanillaBlockID.waterlily, 0, 1, 5);
FishingLoot.addLootable("treasure", VanillaItemID.name_tag, 0, 1, 5);
FishingLoot.addLootable("treasure", VanillaItemID.saddle, 0, 1, 5);
FishingLoot.addLootable("treasure", VanillaItemID.bow, 0, 1, 5, {
   set_damage: {
      "min": 0,
      "max": 25
   },
   enchant: {
      type: "bow"
   }
});
FishingLoot.addLootable("treasure", VanillaItemID.fishing_rod, 0, 1, 5, {
   set_damage: {
      "min": 0,
      "max": 25
   },
   enchant: {
      type: "fishing"
   }
});
FishingLoot.addLootable("treasure", VanillaItemID.enchanted_book, 0, 1, 6, {
   enchant: {
      type: "all"
   }
});