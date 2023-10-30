let igneousUI = MachineUI.createInventoryWindow("Igneous Extruder", {
  drawing: [{ type: "bitmap", x: 550, y: 70, bitmap: "bars.machine.def_empty", scale: 3.2}, ],
  elements: {
    //@formatter:off
    "progressScale": { type: "scale", x: 170, y: 70, direction: 0, bitmap: "bars.machine.def_full", scale: 3.2 },
    "slotResult": {
      type: "slot",
      x: 250,
      y: 70,
      size: 60,
      isValid: function(id, count, data) {
        return false
      }
    },
    "icon1": {
      type: "slot",
      x: 100,
      y: 40,
      size: 60,visual: true, maxStackSize: 1
    },
    "icon2": {
      type: "slot",
      x: 160,
      y: 40,
      size: 60,visual: true, maxStackSize: 1
    },
    "icon3": {
      type: "slot",
      x: 130,
      y: 100,
      size: 60,visual: true, maxStackSize: 1
    }
    //@formatter:on
  }
})

MachineUI.createTabWindow("thermalDeviceIgneous")