let energyCellUI = MachineUI.createInventoryWindow("Redstone Flux Cell", {
   drawing: [
      { type: "bitmap", x: 172, y: 100, bitmap: "bars.rf_empty", scale: 5 },
      { type: "bitmap", x: 172 - 25 - 20 * 5, y: 100, bitmap: "ui.energyCell.input", scale: 5 },
      { type: "bitmap", x: 172 + 25 + 14 * 5, y: 100, bitmap: "ui.energyCell.output", scale: 5 },],

   elements: {
      "energyScale": { type: "scale", x: 472, y: 100, direction: 1, bitmap: "bars.rf_full", scale: 5 },
      "btnPlusLeft": {
         type: "button",
         x: 160 - 16 * 4,
         y: 100 + (42 * 5 - 16 * 4),
         scale: 4,
         bitmap: "buttons.plus",
         bitmap2: "buttons.plus_pressed",
         clicker: {
            onClick: function (_, container: ItemContainer) {
               container.sendEvent("plus_in", {})
            }
         }
      },
      "btnMinusLeft": {
         type: "button",
         x: 155 - 16 * 4 * 2,
         y: 100 + (42 * 5 - 16 * 4),
         scale: 4,
         bitmap: "buttons.minus",
         bitmap2: "buttons.minus_pressed",
         clicker: {
            onClick: function (_, container: ItemContainer) {
               container.sendEvent("minus_in", {})
            }
         }
      },
      "textLeft": { type: "text", text: "25000", x: 172 - 130, y: 100 + 42 * 5 - 16 * 4 - 40, font: FONT_WHITE_30 },
      "btnPlusRight": {
         type: "button",
         x: 190 + 16 * 4,
         y: 100 + (42 * 5 - 16 * 4),
         scale: 4,
         bitmap: "buttons.plus",
         bitmap2: "buttons.plus_pressed",
         clicker: {
            onClick: function (_, container: ItemContainer) {
               container.sendEvent("plus_out", {});
            }
         }
      },
      "btnMinusRight": {
         type: "button",
         x: 195 + 16 * 4 * 2,
         y: 100 + (42 * 5 - 16 * 4),
         scale: 4,
         bitmap: "buttons.minus",
         bitmap2: "buttons.minus_pressed",
         clicker: {
            onClick: function (_, container: ItemContainer) {
               container.sendEvent("minus_out", {})
            }
         }
      },
      "textRight": {
         type: "text",
         text: "25000",
         x: 172 + 20 + 14 * 5,
         y: 100 + 42 * 5 - 16 * 4 - 40,
         font: FONT_WHITE_30
      },

      "textEnergy": { type: "text", text: "0/0 RF", x: 100, y: 320, font: FONT_WHITE_30 }
   }
});

MachineUI.createTabWindow("thermalEnergyCell", {
   disableVanillaSlots: true,
   disableInventory: false,
   disableJeiMobile: false,
   disableInfomation: false,
   disableAugment: false,
   disableConfig: false
})


// let ConfigUI_EnergyCell = new UI.Window({
//    drawing: [
//       { type: "background", color: Color.rgb(7, 79, 130) }, ],
//    elements: (() => {
//       const elems = ({
//          right: {
//             type: "image",
//             x: 100,
//             y: 40,
//             scale: 1.6,
//             bitmap: "icons.cells.energy_cell",
//             overlay: "config.cell_config_none",
//             clicker: {
//                onClick: function(_, container: ItemContainer) {
//                   container.sendEvent("config", { side: BlockSide.SOUTH })
//                }
//             }
//          },
//          left: {
//             type: "image",
//             x: 180,
//             y: 40,
//             scale: 1.6,
//             bitmap: "icons.cells.energy_cell",
//             overlay: "config.cell_config_none",
//             clicker: {
//                onClick: function(_, container: ItemContainer) {
//                   container.sendEvent("config", { side: BlockSide.NORTH })
//                }
//             }
//          },
//          front: {
//             type: "image",
//             x: 140,
//             y: 40,
//             scale: 1.6,
//             bitmap: "icons.cells.energy_cell",
//             overlay: "config.cell_config_none",
//             clicker: {
//                onClick: function(_, container: ItemContainer) {
//                   container.sendEvent("config", { side: BlockSide.EAST })
//                }
//             }
//          },
//          behind: {
//             type: "image",
//             x: 100,
//             y: 80,
//             scale: 1.6,
//             bitmap: "icons.cells.energy_cell",
//             overlay: "config.cell_config_none",
//             clicker: {
//                onClick: function(_, container: ItemContainer) {
//                   container.sendEvent("config", { side: BlockSide.WEST })
//                }
//             }
//          },
//          up: {
//             type: "image",
//             x: 140,
//             y: 0,
//             scale: 1.6,
//             bitmap: "icons.cells.energy_cell",
//             overlay: "config.cell_config_none",
//             clicker: {
//                onClick: function(_, container: ItemContainer) {
//                   container.sendEvent("config", { side: BlockSide.UP })
//                }
//             }
//          },
//          down: {
//             type: "image",
//             x: 140,
//             y: 80,
//             scale: 1.6,
//             bitmap: "icons.cells.energy_cell",
//             overlay: "config.cell_config_none",
//             clicker: {
//                onClick: function(_, container: ItemContainer) {
//                   container.sendEvent("config", { side: BlockSide.DOWN })
//                }
//             }
//          },
//       }) as UI.ElementSet;
//       return elems;
//    })()
// });
