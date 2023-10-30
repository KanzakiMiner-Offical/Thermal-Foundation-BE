BlockRegistry.createBlock("thermalEnergyCell", [{
   name: "block.thermal.energy_cell",
   texture: [["energy_cell", 0], ["energy_cell", 0], ["energy_cell", 0], ["energy_cell", 0], ["energy_cell", 0], ["energy_cell", 0]],
   inCreative: true
}], "cells")

TileRenderer.setHandAndUiModel(BlockID.thermalEnergyCell, 0, [["energy_cell", 0], ["energy_cell", 0], ["energy_cell", 0], ["energy_cell", 0], ["energy_cell", 0], ["energy_cell", 0]])
TileRenderer.setStandardModelWithRotation(BlockID.thermalEnergyCell, 2, [["energy_cell", 0], ["energy_cell", 0], ["energy_cell", 0], ["energy_cell", 0], ["energy_cell", 0], ["energy_cell", 0]])

TileRenderer.setRotationFunction(BlockID.thermalEnergyCell)

Callback.addCallback("PreLoaded", function() {
   Recipes.addShaped({ id: BlockID.thermalEnergyCell, count: 1, data: 0 }, [
         "cxc",
         "b#b",
         "cac"
     ], ['#', BlockID.frameEnergy, 0, 'x', VanillaBlockID.redstone_block, 0, 'b', VanillaItemID.iron_ingot, 0, 'a', ItemID.rf_coil, 0, 'c', ItemID.cured_rubber, 0]);
});