BlockRegistry.createBlock("thermalDeviceAccumulator", [
  {
    name: "block.thermal.device_water_gen",
    texture: [["device_water_gen_bottom", 0], ["device_water_gen_top", 0], ["device_water_gen_side", 0], ["device_water_gen", 0], ["device_water_gen_side", 0], ["device_water_gen_side", 0]],
    inCreative: true
  }
], "machine")

TileRenderer.setHandAndUiModel(BlockID.thermalDeviceAccumulator, 0, [["device_water_gen_bottom", 0], ["device_water_gen_top", 0], ["device_water_gen_side", 0], ["device_water_gen", 0], ["device_water_gen_side", 0], ["device_water_gen_side", 0]])
TileRenderer.setStandardModelWithRotation(BlockID.thermalDeviceAccumulator, 2, [["device_water_gen_bottom", 0], ["device_water_gen_top", 0], ["device_water_gen_side", 0], ["device_water_gen", 0], ["device_water_gen_side", 0], ["device_water_gen_side", 0]])
TileRenderer.registerModelWithRotation(BlockID.thermalDeviceAccumulator, 2, [["device_water_gen_bottom", 0], ["device_water_gen_top", 0], ["device_water_gen_side", 0], ["device_water_gen_active", 0], ["device_water_gen_side", 0], ["device_water_gen_side", 0]])

TileRenderer.setRotationFunction(BlockID.thermalDeviceAccumulator)
