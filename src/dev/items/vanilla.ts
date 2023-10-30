namespace MaterialRegistry {
  export function registerVanillaDust(id: string) {
    let name = "item.thermal." + id + "_dust"
    let _id = id.charAt(0).toUpperCase() + id.slice(1);
    ItemRegistry.createItem("dust" + _id, { name: name, icon: id + "_dust" });
    Item.addCreativeGroup("tf_dust", Translation.translate("Thermal Foundation: Dust"), [
         ItemID["dust" + _id]
      ]);
  }

  export function registerVanillaNugget(id: string, suffix ? : string) { //suffix: "_ingot"/"_gem"
    let name = "item.thermal." + id + "_nugget"
    let _id = id.charAt(0).toUpperCase() + id.slice(1);
    ItemRegistry.createItem("nugget" + _id, { name: name, icon: id + "_nugget" });

    Item.addCreativeGroup("tf_nugget", Translation.translate("Thermal Foundation: Nugget"), [
         ItemID["nugget" + _id]
      ]);
    if (!!suffix && (suffix == "_ingot" || suffix == "_gem")) {
      Recipes.addShaped({ id: VanillaItemID[id + suffix], count: 1, data: 0 }, [
            "fff",
            "fff",
            "fff",
        ], ['f', ItemID["nugget" + _id], 0]);
      Recipes.addShapeless({ id: ItemID["nugget" + _id], count: 9, data: 0 }, [{ id: VanillaItemID[id + suffix], data: 0 }]);
    } else if (!suffix) {
      Recipes.addShaped({ id: VanillaItemID[id], count: 1, data: 0 }, [
            "fff",
            "fff",
            "fff",
        ], ['f', ItemID["nugget" + _id], 0]);
      Recipes.addShapeless({ id: ItemID["nugget" + _id], count: 9, data: 0 }, [{ id: VanillaItemID[id], data: 0 }]);
    }
  }

  export function registerVanillaPlate(id: string) {
    let name = "item.thermal." + id + "_plate"
    let _id = id.charAt(0).toUpperCase() + id.slice(1);
    ItemRegistry.createItem("plate" + _id, { name: name, icon: id + "_plate" });
    Item.addCreativeGroup("tf_plate", Translation.translate("Thermal Foundation: Plate"), [
         ItemID["plate" + _id]
      ]);
  }

  export function registerVanillaGear(id: string, suffix ? : string) {
    let name = "item.thermal." + id + "_gear";
    let _id = id.charAt(0).toUpperCase() + id.slice(1);
    ItemRegistry.createItem("gear" + _id, { name: name, icon: id + "_gear" });
    Item.addCreativeGroup("tf_gear", Translation.translate("Thermal Foundation: Gear"), [
          ItemID["gear" + _id]
      ]);

    for (let i = 0; i < gearHearts.length; i++) {
      if (!!suffix) {
        Recipes.addShaped({ id: ItemID["gear" + _id], count: 1, data: 0 }, [
               " f ",
               "fhf",
               " f ",
           ], ['f', VanillaItemID[id + suffix], 0, 'h', gearHearts[i], 0]);
      } else if (!suffix) {
        Recipes.addShaped({ id: ItemID["gear" + _id], count: 1, data: 0 }, [
               " f ",
               "fhf",
               " f ",
           ], ['f', VanillaItemID[id], 0, 'h', gearHearts[i], 0]);
      }
    }
  }

  export function registerVanillaCoin(id: string) {
    let name = "item.thermal." + id + "_coin"
    let _id = id.charAt(0).toUpperCase() + id.slice(1);
    ItemRegistry.createItem("coin" + _id, { name: name, icon: id + "_coin" });
    Item.addCreativeGroup("tf_coin", Translation.translate("Thermal Foundation: Coin"), [
         ItemID["coin" + _id]
      ]);
  }

  export function registerForVanillaMetal(id: string) {
    registerVanillaDust(id);
    registerVanillaPlate(id);
    registerVanillaGear(id, "_ingot");
    registerVanillaCoin(id);
  }

  export function registerForVanillaOtherMaterial(id: string, suffix ? : string, coin ? : boolean) {
    registerVanillaDust(id);
    registerVanillaPlate(id);
    registerVanillaNugget(id, suffix);
    registerVanillaGear(id, suffix);
    if (!!coin) {
      registerVanillaCoin(id);
    }
  }
}

MaterialRegistry.registerForVanillaMetal("iron")
MaterialRegistry.registerForVanillaMetal("gold")

MaterialRegistry.registerForVanillaOtherMaterial("netherite", "_ingot", true);
MaterialRegistry.registerForVanillaOtherMaterial("diamond")
MaterialRegistry.registerForVanillaOtherMaterial("emerald")