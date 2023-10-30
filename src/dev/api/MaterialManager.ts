namespace MaterialRegistry {
  export let oreName: string[] = []
  export let ingotData: string[] = []
  export let gearHearts = [VanillaItemID.iron_nugget, ItemID.nuggetBronze];


  export function registerIngot(id: string) {
    let name = "item.thermal." + id + "_ingot"
    let _id = id.charAt(0).toUpperCase() + id.slice(1);
    ItemRegistry.createItem("ingot" + _id, { name: name, icon: id + "_ingot" });
    Item.addCreativeGroup("tf_ingot", Translation.translate("Thermal Foundation: Ingot"), [
      ItemID["ingot" + _id]
    ]);
  }

  export function registerNugget(id: string, notRecipe: boolean = false) {
    let name = "item.thermal." + id + "_nugget"
    let _id = id.charAt(0).toUpperCase() + id.slice(1);
    ItemRegistry.createItem("nugget" + _id, { name: name, icon: id + "_nugget" });

    Item.addCreativeGroup("tf_nugget", Translation.translate("Thermal Foundation: Nugget"), [
      ItemID["nugget" + _id]
    ]);
    if (!notRecipe) {
      Recipes.addShaped({ id: ItemID["ingot" + _id], count: 1, data: 0 }, [
        "fff",
        "fff",
        "fff",
      ], ['f', ItemID["nugget" + _id], 0]);
      Recipes.addShapeless({ id: ItemID["nugget" + _id], count: 9, data: 0 }, [{ id: ItemID["ingot" + _id], data: 0 }]);
    }
  }

  export function registerDust(id: string) {
    let name = "item.thermal." + id + "_dust"
    let _id = id.charAt(0).toUpperCase() + id.slice(1);
    ItemRegistry.createItem("dust" + _id, { name: name, icon: id + "_dust" });
    Item.addCreativeGroup("tf_dust", Translation.translate("Thermal Foundation: Dust"), [
      ItemID["dust" + _id]
    ]);
  }

  export function registerCoin(id: string) {
    let name = "item.thermal." + id + "_coin"
    let _id = id.charAt(0).toUpperCase() + id.slice(1);
    ItemRegistry.createItem("coin" + _id, { name: name, icon: id + "_coin" });
    Item.addCreativeGroup("tf_coin", Translation.translate("Thermal Foundation: Coin"), [
      ItemID["coin" + _id]
    ]);
  }

  export function registerPlate(id: string) {
    let name = "item.thermal." + id + "_plate"
    let _id = id.charAt(0).toUpperCase() + id.slice(1);
    ItemRegistry.createItem("plate" + _id, { name: name, icon: id + "_plate" });
    Item.addCreativeGroup("tf_plate", Translation.translate("Thermal Foundation: Plate"), [
      ItemID["plate" + _id]
    ]);
  }

  export function registerGear(id: string, prefix?: string) {
    let name = "item.thermal." + id + "_gear";
    let _id = id.charAt(0).toUpperCase() + id.slice(1);
    ItemRegistry.createItem("gear" + _id, { name: name, icon: id + "_gear" });
    Item.addCreativeGroup("tf_gear", Translation.translate("Thermal Foundation: Gear"), [
      ItemID["gear" + _id]
    ]);

    for (let i = 0; i < gearHearts.length; i++) {
      if (!!prefix) {
        Recipes.addShaped({ id: ItemID["gear" + _id], count: 1, data: 0 }, [
          " f ",
          "fhf",
          " f ",
        ], ['f', ItemID[prefix + _id], 0, 'h', gearHearts[i], 0]);
      } else {
        Recipes.addShaped({ id: ItemID["gear" + _id], count: 1, data: 0 }, [
          " f ",
          "fhf",
          " f ",
        ], ['f', ItemID[id], 0, 'h', gearHearts[i], 0]);
      }
    }
  }

  export function registerRaw(id: string) {
    let name = "item.thermal.raw_" + id;
    let _id = id.charAt(0).toUpperCase() + id.slice(1);
    ItemRegistry.createItem("raw" + _id, { name: name, icon: "raw_" + id });
    Item.addCreativeGroup("tf_raw", Translation.translate("Thermal Foundation: Raw"), [
      ItemID["raw" + _id]
    ]);
  }

  export function registerOther(id: string) {
    let name = `item.thermal.${id}`

    ItemRegistry.createItem(id, { name: name, icon: id });
  }

  export function registerOre(id: string, time: number, level: number) {
    class BlockOre extends BlockBase {
      constructor(id: string, time: number, miningLevel: number) {
        let _id = "ore" + id.charAt(0).toUpperCase() + id.slice(1);
        super(_id, "ore");
        const name = "block.thermal." + id + "_ore";
        const textureName = id + "_ore";
        this.addVariation(name, [[textureName, 0]], true);
        this.setBlockMaterial("stone", miningLevel);
        this.setDestroyTime(time)
      }
    }
    BlockRegistry.registerBlock(new BlockOre(id, time, level));
    Item.addCreativeGroup("tf_ore", Translation.translate("Thermal Foundation: Ore"), [
      BlockID["ore" + id.charAt(0).toUpperCase() + id.slice(1)]
    ]);
  }

  export function registerStorage(id: string, time: number, level: number) {
    class BlockResource extends BlockBase {
      constructor(id: string, time: number, miningLevel: number) {
        let _id = "block" + id.charAt(0).toUpperCase() + id.slice(1);
        super(_id, "stone");
        const name = "block.thermal." + id + "_block"
        const textureName = id + "_block"
        this.addVariation(name, [[textureName, 0]], true);
        this.setBlockMaterial("stone", miningLevel);
        this.setDestroyTime(time)
      }
    }
    BlockRegistry.registerBlock(new BlockResource(id, time, level));

    Item.addCreativeGroup("tf_block", Translation.translate("Thermal Foundation: Block"), [
      BlockID["block" + id.charAt(0).toUpperCase() + id.slice(1)]
    ]);
  }

  export function registerOtherResource(id: string, level: number, time: number, isOnlyDust?: boolean, notRecipe?: boolean) {
    registerOre(id, time, level);
    registerOther(id);
    registerDust(id);
    registerStorage(id, time, level);
    if (!!isOnlyDust) {
      registerPlate(id);
      registerGear(id);
      registerNugget(id, notRecipe);
    }
  }

  export function registerResource(id: string, level: number, time: number) {
    oreName.push(id);
    ingotData.push(id);
    registerOre(id, time, level);
    registerRaw(id);
    registerDust(id);
    registerIngot(id);
    registerNugget(id, false);
    registerStorage(id, time, level);
    registerPlate(id);
    registerCoin(id);
    registerGear(id, "ingot");
  }

  export function registerAloy(id: string, level: number, time: number) {
    ingotData.push(id);
    registerDust(id);
    registerIngot(id);
    registerNugget(id, false);
    registerStorage(id, time, level);
    registerPlate(id);
    registerCoin(id);
    registerGear(id, "ingot");
  }
};