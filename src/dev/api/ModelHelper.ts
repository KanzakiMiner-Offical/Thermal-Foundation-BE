namespace ModelHelper {
   let cache = {};
   let configData = {
      0: "input",
      1: "output",
      2: "none",
      3: "both"
   }
   export function mapEnergyCell(x: number, y: number, z: number, id: number, heartIndex: number, io?: number[]) {
      let key = id + ":" + heartIndex;
      let render = cache[key];
      if (!render) {
         render = new ICRender.Model();
         let model = BlockRenderer.createModel();


         model.addBox(0, 1, 0, 1, 1, 1, "cell_config_" + configData[io[EBlockSide.UP]], 0);
         model.addBox(0, 0, 0, 1, 0, 1, "cell_config_" + configData[io[EBlockSide.DOWN]], 0);

         model.addBox(0, 0, 0, 1, 1, 0, "cell_config_" + configData[io[EBlockSide.WEST]], 0);
         model.addBox(0, 0, 1, 1, 1, 0, "cell_config_" + configData[io[EBlockSide.EAST]], 0);
         model.addBox(0, 0, 0, 0, 1, 1, "cell_config_" + configData[io[EBlockSide.NORTH]], 0);
         model.addBox(1, 0, 0, 0, 1, 1, "cell_config_" + configData[io[EBlockSide.SOUTH]], 0);

         model.addBox(0, 0, 0, 1, 1, 1, "energy_cell", 0);
         model.addBox(0, 0, 0, 1, 1, 1, "cell_meter", heartIndex);

         render.addEntry(model);
         cache[key] = render;
      }
      BlockRenderer.enableCoordMapping(id, -1, render);
      BlockRenderer.mapAtCoords(x, y, z, render);
   }
};