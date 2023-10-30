BlockRegistry.createBlockType("thermal_frame", {
  extends: "stone",
  solid: false,
  destroyTime: 1
});

BlockRegistry.createBlock("frameMachine", [{
   name: "block.thermal.machine_frame",
   texture: [["machine_frame_bottom", 0], ["machine_frame_top", 0], ["machine_frame_side", 0]],
   inCreative: true
}], "thermal_frame")

BlockRegistry.setBlockMaterial(BlockID.frameMachine, "stone", 1);

Callback.addCallback("PreLoaded", function() {
   Recipes.addShaped({ id: BlockID.frameMachine, count: 1, data: 0 }, [
        "fgf",
        "gbg",
        "fgf"
    ], ['f', VanillaItemID.iron_ingot, -1, 'g', VanillaBlockID.glass, -1, 'b', ItemID.gearTin, -1]);
});

BlockRegistry.createBlock("frameMachine", [{
   name: "block.thermal.energy_cell_frame",
   texture: [["energy_cell", 0]],
   inCreative: true
}], "thermal_frame")

BlockRegistry.setBlockMaterial(BlockID.frameEnergy, "stone", 1);
Callback.addCallback("PreLoaded", function() {
   Recipes.addShaped({ id: BlockID.frameEnergy, count: 1, data: 0 }, [
        "fgf",
        "gbg",
        "fgf"
    ], ['f', ItemID.ingotLead, -1, 'g', VanillaBlockID.glass, -1, 'b', ItemID.gearElectrum, -1]);
});

function registerRenderPart(id) {
   let partRender = new ICRender.Model();
   BlockRenderer.setStaticICRender(BlockID[id], 0, partRender);
   let model = BlockRenderer.createModel();
   model.addBox(0 / 16, 0 / 16, 0 / 16, 16 / 16, 16 / 16, 16 / 16, BlockID[id], 0);
   partRender.addEntry(model);
}
registerRenderPart("frameMachine")
registerRenderPart("frameEnergy")