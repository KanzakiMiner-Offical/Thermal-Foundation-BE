BlockRegistry.createBlock("thermalDeviceFisher", [
  {
    name: "block.thermal.device_fisher",
    texture: [["device_fisher_bottom", 0], ["device_fisher_top", 0], ["device_fisher_west", 0], ["device_fisher_east", 0], ["device_fisher", 0], ["device_fisher_south", 0]],
    inCreative: true
  }
], "machine")
/*
 * ```js 
 * texture: [
 *   ["название1", индекс1], // bottom (Y: -1)
 *   ["название2", индекс2], // top (Y: +1)
 *   ["название3", индекс3], // back (X: -1) West
 *   ["название4", индекс4], // front (X: +1) East
 *   ["название5", индекс5], // left (Z: -1) North
 *   ["название6", индекс6]  // right (Z: +1) South
 * ]
 * ```
 */
/*
TileRenderer.setHandAndUiModel(BlockID.thermalDeviceIgneous, 0, [["device_fisher_bottom", 0], ["device_fisher_top", 0], ["device_fisher_side", 0], ["device_fisher", 0], ["device_fisher_side", 0], ["device_fisher_side", 0]])
TileRenderer.setStandardModelWithRotation(BlockID.thermalDeviceIgneous, 2, [["device_fisher_bottom", 0], ["device_fisher_top", 0], ["device_fisher_side", 0], ["device_fisher", 0], ["device_fisher_side", 0], ["device_fisher_side", 0]])
TileRenderer.registerModelWithRotation(BlockID.thermalDeviceIgneous, 2, [["device_fisher_bottom", 0], ["device_fisher_top", 0], ["device_fisher_side", 0], ["device_fisher", 0], ["device_fisher_side", 0], ["device_fisher_side", 0]])// active model

TileRenderer.setRotationFunction(BlockID.thermalDeviceIgneous)
*/
