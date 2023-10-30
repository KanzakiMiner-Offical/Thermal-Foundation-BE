class AugmentModule extends ItemCommon
implements IAugments {
  type: string;

  constructor(stringID: string, name: string, icon: string | Item.TextureData, type ? : string) { // id, name, icon
    
    super(stringID, `item.thermal.${name}`, icon);
    if (type) this.type = type;
    AugmentsAPI.registerUpgrade(this.id, this);
  }
}