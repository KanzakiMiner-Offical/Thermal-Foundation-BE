namespace MaterialRegistry {
  export function registerDropMob(id: string) {
    let _id = id.charAt(0).toUpperCase() + id.slice(1);
    let name_rod = `item.thermal.${id}_rod`
    ItemRegistry.createItem("rod" + _id, { name: name_rod, icon: id + "_rod" });
    
    let name_powder = `item.thermal.${id}_powder`
    ItemRegistry.createItem("powder" + _id, { name: name_powder, icon: id + "_powder" });
    Recipes.addShapeless({ id: ItemID["powder" + _id], count: 2 , data: 0}, [{ id: ItemID["rod" + _id], data: 0 }]);
  }
}
MaterialRegistry.registerDropMob("blizz");
MaterialRegistry.registerDropMob("blitz");
MaterialRegistry.registerDropMob("basalz");