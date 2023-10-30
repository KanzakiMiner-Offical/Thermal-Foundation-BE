class ToolWrench extends ItemCommon
implements IWrech {
   constructor(stringID: string, name: string, icon: string) {
      super(stringID, name, icon);
      this.setMaxStack(1);
      this.setCategory(ItemCategory.EQUIPMENT);
      ThermalTool.registerWrench(this.id, this);
   }

   isUseable(item: ItemInstance, damage: number): boolean {
      return true;
   }

   onNameOverride(item: ItemInstance, name: string): string {
      return `${name}\n§r§6${Translation.translate("item.thermal.wrench.desc")}`
   }

   useItem(item: ItemStack, damage: number, player: number): void {
      Entity.setCarriedItem(player, item.id, 1, item.data, item.extra);
   }
}
ItemRegistry.registerItem(new ToolWrench("thermalWrench", "item.thermal.wrench", "tf_wrench"));

Callback.addCallback("PreLoaded", function() {
   Recipes.addShaped({ id: ItemID["thermalWrench"], count: 1, data: 0 }, [
      "f f",
      " h ",
      " f ",
   ], ['f', VanillaItemID["iron_ingot"], 0, 'h', ItemID["gearIron"], 0]);
})