namespace Machine {
   export class DeviceFisher extends DeviceMachine {
      defaultValues = {
         progress: 0,
      }
      progressMax: number;
      defaultBaseMod = 1;
      x: number;
      y: number;
      z: number;
      timeConstant = 4800;
      minTimeConstant = 240;
      timeReductionWater = 20;
      getScreenByName(): UI.IWindow {
         return fisherUI;
      }

      getTimeConstant(): number {
         let constant = this.timeConstant;
         let inputSlot = this.container.getSlot("slotInput");
         if (this.region.getBlockId(this.x, this.y, this.z - 1) === VanillaBlockID.water) {
            constant -= this.timeReductionWater;
         }

         if (this.region.getBiome(this.x, this.y) == 10 ||
            this.region.getBiome(this.x, this.y) == 24 ||
            this.region.getBiome(this.x, this.y) == 42 ||
            this.region.getBiome(this.x, this.y) == 43 ||
            this.region.getBiome(this.x, this.y) == 44 ||
            this.region.getBiome(this.x, this.y) == 45 ||
            this.region.getBiome(this.x, this.y) == 46 ||
            this.region.getBiome(this.x, this.y) == 46 ||
            this.region.getBiome(this.x, this.y) == 48 ||
            this.region.getBiome(this.x, this.y) == 49 ||
            this.region.getBiome(this.x, this.y) == 50) { // ocean
            constant /= 3;
         }
         if (this.region.getBiome(this.x, this.y) == 7 ||
            this.region.getBiome(this.x, this.y) == 11) { // river
            constant /= 2;
         }
         if (World.getWeather().rain > 0) {
            constant /= 2;
         }
         if (inputSlot.isEmpty()) {
            //constant *= 2;
         }
         return MathHelper.clamp(constant, this.timeConstant / 20, this.timeConstant);
      }

      onThread(): void {
         const threadName = "thermal_fisher_" + this.x + ":" + this.y + ":" + this.z;
         const thread = Threading.getThread(threadName);
         if (thread && thread.isAlive()) {
            Game.message("Thread đang sống khoẻ =)))");// debug
            return;
         }
         Threading.initThread(threadName, () => {
            try {
               let type = FishingLoot.randomLootFromBiomes(this.region.getBiome(this.x, this.z))
               let loot_base = this.baseMod // * manager
               let loot_extra = loot_base - Math.floor(loot_base)
               let loot_count: number = this.baseMod + (Math.floor(Math.random()) < loot_extra ? 0 : 1)
               Game.message(loot_count + "m")
               for (let i = 1; i++; i <= loot_count) {
                  let loot = FishingLoot.randomLootFish(type)
                  Game.message(loot + " ")
                  if (loot) {
                     this.addItemToSlot(loot);
                  }
               }
            }
            catch (e) {
               alert("Error Fisher: " + e);
            }
         });
      }

      onTick(): void {
         StorageInterface.checkHoppers(this);
         this.useUpgrade();
         this.progressMax = Math.max(this.minTimeConstant, this.getTimeConstant());
         this.data.progress++;
         if (this.data.progress >= this.progressMax) {
            this.onThread();
            this.data.progress = 0;            
         }

         this.container.sendChanges()
      }

      addItemToSlot(item) {
         for (let i = 1; i <= 24; i++) {
            let slot = this.container.getSlot("slot_" + i);
            this.container.validateSlot("slot_" + i);
            if ((slot.id == 0) || slot.id == item.id && slot.data == item.data && slot.count < Item.getMaxStack(item.id)) {
               slot.id = item.id;
               slot.data = item.data;
               slot.count++;
               if (item.extra_func) {
                  if (item.extra_func.set_damage) {
                     slot.data = Math.floor(Item.getMaxDamage(item.id) * (MathHelper.randomInt(item.extra_func.set_damage.min, item.extra_func.set_damage.max) / 100));
                  } else if (item.extra_func.enchant) {
                     let extra = new ItemExtraData();
                     let enchant_type = FishingLoot.randomEnchantFromType(item.extra_func.enchant.type)
                     extra.addEnchant(enchant_type.id, MathHelper.randomInt(1, item.enchant_type.level))
                     slot.extra = extra;
                  }
               }
               slot.markDirty();
               break;
            }
         }
      }
   }
   MachineRegistry.registerPrototype(BlockID.thermalDeviceFisher, new DeviceFisher());
   MachineRegistry.setStoragePlaceFunction("thermalDeviceFisher", true)
}