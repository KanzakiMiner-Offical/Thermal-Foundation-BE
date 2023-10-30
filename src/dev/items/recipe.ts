Callback.addCallback("PreLoaded", function() {
   Recipes.addShapeless({ id: ItemID.dustConstantan, count: 2, data: 0 }, [{ id: ItemID.dustCopper, data: 0 }, { id: ItemID.dustNickel, data: 0 }]);
   Recipes.addShapeless({ id: ItemID.dustBronze, count: 4, data: 0 }, [{ id: ItemID.dustTin, data: 0 }, { id: ItemID.dustCopper, data: 0 }, { id: ItemID.dustCopper, data: 0 }, { id: ItemID.dustCopper, data: 0 }]);
   Recipes.addShapeless({ id: ItemID.dustInvar, count: 3, data: 0 }, [{ id: ItemID.dustIron, data: 0 }, { id: ItemID.dustNickel, data: 0 }, { id: ItemID.dustNickel, data: 0 }]);
   Recipes.addShapeless({ id: ItemID.dustEnderium, count: 4, data: 0 }, [{ id: ItemID.dustDiamond, data: 0 }, { id: ItemID.dustLead, data: 0 }, { id: ItemID.dustLead, data: 0 }, { id: ItemID.dustLead, data: 0 }, { id: ItemID.bucketEnder, data: 0 }], function(api, field, result) {
      for (let i = 0; i < field.length; i++) {
         if (field[i].id == ItemID.bucketEnder) {
            field[i].id = VanillaItemID.bucket
            field[i].data = 0;
         } else {
            api.decreaseFieldSlot(i);
         }
      }
   });
   Recipes.addShapeless({ id: ItemID.dustSignalum, count: 4, data: 0 }, [{ id: ItemID.dustSilver, data: 0 }, { id: ItemID.dustCopper, data: 0 }, { id: ItemID.dustCopper, data: 0 }, { id: ItemID.dustCopper, data: 0 }, { id: ItemID.bucketRedstone, data: 0 }], function(api, field, result) {
      for (let i = 0; i < field.length; i++) {
         if (field[i].id == ItemID.bucketRedstone) {
            field[i].id = VanillaItemID.bucket
            field[i].data = 0;
         } else {
            api.decreaseFieldSlot(i);
         }
      }
   });
   Recipes.addShapeless({ id: ItemID.dustLumium, count: 4, data: 0 }, [{ id: ItemID.dustSilver, data: 0 }, { id: ItemID.dustTin, data: 0 }, { id: ItemID.dustTin, data: 0 }, { id: ItemID.dustTin, data: 0 }, { id: ItemID.bucketGlowstone, data: 0 }], function(api, field, result) {
      for (let i = 0; i < field.length; i++) {
         if (field[i].id == ItemID.bucketGlowstone) {
            field[i].id = VanillaItemID.bucket
            field[i].data = 0;
         } else {
            api.decreaseFieldSlot(i);
         }
      }
   });
});