BlockRegistry.createBlock("thermalDeviceIgneous", [
  {
    name: "block.thermal.device_rock_gen",
    texture: [["device_rock_gen_bottom", 0], ["device_rock_gen_top", 0], ["device_rock_gen_side", 0], ["device_rock_gen", 0], ["device_rock_gen_side", 0], ["device_rock_gen_side", 0]],
    inCreative: true
  }
], "machine")

TileRenderer.setHandAndUiModel(BlockID.thermalDeviceIgneous, 0, [["device_rock_gen_bottom", 0], ["device_rock_gen_top", 0], ["device_rock_gen_side", 0], ["device_rock_gen", 0], ["device_rock_gen_side", 0], ["device_rock_gen_side", 0]])
TileRenderer.setStandardModelWithRotation(BlockID.thermalDeviceIgneous, 2, [["device_rock_gen_bottom", 0], ["device_rock_gen_top", 0], ["device_rock_gen_side", 0], ["device_rock_gen", 0], ["device_rock_gen_side", 0], ["device_rock_gen_side", 0]])
TileRenderer.registerModelWithRotation(BlockID.thermalDeviceIgneous, 2, [["device_rock_gen_bottom", 0], ["device_rock_gen_top", 0], ["device_rock_gen_side", 0], ["device_rock_gen", 0], ["device_rock_gen_side", 0], ["device_rock_gen_side", 0]])// active model

TileRenderer.setRotationFunction(BlockID.thermalDeviceIgneous)
