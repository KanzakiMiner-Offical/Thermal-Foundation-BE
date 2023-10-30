let accumulatorUI = MachineUI.createInventoryWindow("Aqueous Accumulator", {
  drawing: [
    { type: "bitmap", x: 250, y: 18, bitmap: "bars.fluid_1", scale: 4 }
    ],
  elements: {
    //@formatter:off
    "liquidScale": { type: "scale", x: 250, y: 18, direction: 1, bitmap: "bars.fluid_0", scale: 4 },
    "slotContainer": { type: "slot", x: 170, y: 30 },
    "slotFilledContainer": { type: "slot", x: 170, y: 90 },
    //@formatter:on
  }
})

MachineUI.createTabWindow("thermalDeviceAccumulator")