class UpgradeAugment extends AugmentModule
implements ItemBehavior {
  type = "upgrade";
  multi: number;
  desc: string;

  constructor(stringID: string, name: string, icon: Item.TextureData, multi ? : number) {
    super(stringID, name, icon)
    this.multi = multi || 2;
    this.desc = `item.thermal.${name}.desc`
  }

  onNameOverride(item: ItemInstance, name: string): string {
    return `${name}\n§r§6${Translation.translate(this.desc)}\n§r§eType: §f${Translation.translate("info.thermal.augment.type.Upgrade")}\n§r§7${Translation.translate("info.thermal.augment.attr.BaseMod")}: §n§a${this.multi}x`
  }

  getBaseValueMultiplier(item: ItemInstance): number {
    return this.multi;
  }
}