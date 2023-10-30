class DebugItem extends ItemCommon {
   constructor() {
      super("thermal_debug", "INFINITY PROGRESS !!!!!!!!!!!!!!!!!!", "stick");
      this.setMaxStack(1);
      this.setCategory(ItemCategory.EQUIPMENT);
   }

   onItemUse(coords: Callback.ItemUseCoordinates, item: ItemStack, block: Tile, player: number): void {
      let bsource = BlockSource.getDefaultForActor(player);
      let te = TileEntity.getTileEntity(coords.x, coords.y, coords.z, bsource)
      
      if(te.data.progress){
         te.data.progress += 5000;
      }
   }
}
ItemRegistry.registerItem(new DebugItem());