namespace MachineUI {
   export type UIOption = {
      disableVanillaSlots: boolean,
      disableInventory: boolean,
      disableJeiMobile: boolean,
      disableInfomation: boolean,
      disableAugment: boolean,
      disableConfig: boolean
   }
   export let InformationUI = new UI.Window({
      drawing: [
         { type: "background", color: Color.argb(90, 0, 0, 0) }],
      elements: (() => {
         const font: UI.FontParams = { alignment: UI.Font.ALIGN_CENTER, color: Color.BLACK };
         const elems = ({
            textHeader: { type: "text", x: 500, y: 5, font: font, text: "Information" },
         }) as UI.ElementSet;
         return elems;
      })()
   });
   InformationUI.setInventoryNeeded(false);
   InformationUI.setCloseOnBackPressed(true);

   export let AugmentUI = new UI.Window({
      drawing: [
         { type: "background", color: Color.rgb(0, 255, 0) },
         { type: "text", text: "Augmentation", x: 200, y: -1, font: FONT_GREY }, ],
      elements: (() => {
         const elems = ({
            slotAugment1: { type: "slot", x: 120, y: 0, size: 40 },
            slotAugment2: { type: "slot", x: 160, y: 0, size: 40 },
            slotAugment3: { type: "slot", x: 140, y: 40, size: 40 }
         }) as UI.ElementSet;
         return elems;
      })()
   });
   AugmentUI.setInventoryNeeded(true);
   AugmentUI.setCloseOnBackPressed(true);

   export function createInventoryWindow(header: string, uiDescriptor: { drawing ? : UI.DrawingSet, elements: UI.ElementSet }) {
      const gui = new UI.StandardWindow({
         standard: {
            header: { text: { text: Translation.translate(header) } },
            inventory: { standard: true },
            background: { standard: true }
         },
         drawing: uiDescriptor.drawing || [],
         elements: uiDescriptor.elements
      });
      Callback.addCallback("LevelLoaded", function() {
         MachineRegistry.updateGuiHeader(gui, header);
      });
      return gui;
   }

   export function createTabWindow(id: string, option: UIOption = {
      disableVanillaSlots: true,
      disableInventory: false,
      disableJeiMobile: false,
      disableInfomation: false,
      disableAugment: false,
      disableConfig: false
   }, config_ui ? : UI.Window) {
      ModAPI.addAPICallback("ClassicUI", function(api: any) {
         let tab_ui_config = {
            right: [
               { // main
                  id: 1,
                  icon: {
                     id: BlockID[id]
                  },
                  onClick(default_window, config, theme, id) {
                     return api.buildMain(default_window, id, config)
                  }
            }, ],
            left: []
         }
         if (!option.disableInfomation) {
            tab_ui_config.left.push({ // info
               id: 2,
               icon: {
                  id: ItemID.tf_information
               },
               onClick(default_window, config, theme, id) {
                  return InformationUI
               }
            })
         }
         if (!option.disableAugment) {
            tab_ui_config.right.push({ // auguments
               id: 2,
               icon: {
                  id: ItemID.tf_augments,
               },
               onClick(default_window, config, theme, id) {
                  return AugmentUI;
               }
            })
         }
         if (!option.disableConfig) {
            tab_ui_config.right.push({ // config
               id: 3,
               icon: {
                  id: ItemID.tf_config,
               },
               onClick(default_window, config, theme, id) {
                  return config_ui;
               }
            })
         }

         
         api.setBlockFunctions(BlockID[id], {
            disableVanillaSlots: option.disableVanillaSlots,
            disableInventory: option.disableInventory,
            disableJeiMobile: option.disableJeiMobile,
            tabs: tab_ui_config
         });
      });
   }

}