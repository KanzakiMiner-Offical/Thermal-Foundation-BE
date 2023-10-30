/// <reference path="Base.ts" /> 
namespace Machine {
  export abstract class DeviceMachine
    extends MachineBase {
    defaultValues = {};

    upgrades: ["upgrade"];
    data: this["defaultValues"];
    defaultBaseMod: number;
    baseMod: number;

    setupContainer(): void {
      StorageInterface.setGlobalValidatePolicy(this.container, (name, id, amount, data) => {
        if (name.startsWith("slotAugment")) return AugmentsAPI.isValidUpgrade(id, this);
        return false;
      });
    }

    useUpgrade(): AugmentsAPI.AugmentSet {
      let pre_basemod = this.baseMod || 1;
      let upgrades = AugmentsAPI.useUpgrade(this);
      let new_basemod = upgrades.getBaseValue(this.defaultBaseMod);
      this.baseMod = Math.max(new_basemod, pre_basemod);
      return upgrades;
    }

    canRotate(side: number): boolean {
      return side > 1;
    }

    onItemUse(coords: Callback.ItemUseCoordinates, item: ItemStack, player: number): boolean {
      return super.onItemUse(coords, item, player);
    }
  }
}