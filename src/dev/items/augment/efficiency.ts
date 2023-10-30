class UpgradeEfficiency extends AugmentModule
   implements ItemBehavior {
   type = "efficiency";
   data: {
      power?: number,
      speed?: number
      energy: number
   };
   desc: string;

   constructor(stringID: string, name: string, data: {
      power?: number,
      speed?: number
      energy: number
   }) {
      let icon = { name: name, data: 0 };
      super(stringID, name, icon)
      this.data = data
      this.desc = `item.thermal.${name}.desc`
   }

   onNameOverride(item: ItemInstance, name: string): string {
      return `${name}\n§r§6${Translation.translate(this.desc)}`
   }

   getEnergyMultiplier(item: ItemInstance): number {
      return this.data.energy;
   }

   getPowerMultiplier(item: ItemInstance): number {
      return this.data.power || 0
   }

   getSpeed(item: ItemInstance): number {
      return this.data.speed || 0
   }

}

ItemRegistry.registerItem(new UpgradeEfficiency("upgradeEfficiency", "machine_efficiency_augment", {
   energy: 0.9,
   speed: -0.1
}));

ItemRegistry.registerItem(new UpgradeEfficiency("upgradeSpeed", "machine_speed_augment", {
   power: 1,
   energy: 1.1,
}))