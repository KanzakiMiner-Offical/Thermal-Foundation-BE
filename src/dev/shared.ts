interface FoundationAPI {
   ThermalConfig: typeof ThermalConfig
   ThermalFluid: typeof ThermalFluid
   // share for Expansion
   MaterialRegistry: typeof MaterialRegistry
   Machine: typeof Machine
   AugmentsAPI: typeof AugmentsAPI
   MathHelper: typeof MathHelper
   ModelHelper: typeof ModelHelper
   MachineRegistry: typeof MachineRegistry,
   MachineUI: typeof MachineUI
   UniqueGen: typeof UniqueGen
   requireGlobal: (command: any) => any
}
Logger.Log(`Thermal Foundation BE loading finished in ${(Debug.sysTime() - startTime)} ms`, "INFO");
ModAPI.registerAPI("FoundationAPI", ({
   ThermalConfig: ThermalConfig,
   ThermalFluid: ThermalFluid,
   // share for Expansion
   MaterialRegistry: MaterialRegistry,
   Machine: Machine,
   AugmentsAPI: AugmentsAPI,
   MathHelper: MathHelper,
   ModelHelper: ModelHelper,
   MachineRegistry: MachineRegistry,
   MachineUI: MachineUI,
   ThermalTool: ThermalTool,
   UniqueGen: UniqueGen,
   requireGlobal: function (command: any): any {
      return eval(command);
   }
}) as FoundationAPI);

Logger.Log("Thermal Foundation API was shared with name: FoundationAPI", "API");