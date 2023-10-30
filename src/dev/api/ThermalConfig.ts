namespace ThermalConfig {
  export type ore_config = {
    enabled: boolean,
    size: number,
    inChunk?: number,
    minY?: number,
    maxY?: number,
    chance?: number
  }
  export type gen_config = {
    [key: string]: ore_config
  }
  //GENERATION
  export let gen: gen_config = {
    copper: { //
      enabled: __config__.getBool("gen.copper.enabled"),
      size: __config__.getInteger("gen.copper.size"),
      inChunk: __config__.getInteger("gen.copper.inChunk"),
      minY: __config__.getInteger("gen.copper.minY"),
      maxY: __config__.getInteger("gen.copper.maxY")
    },

    tin: { //
      enabled: __config__.getBool("gen.tin.enabled"),
      size: __config__.getInteger("gen.tin.size"),
      inChunk: __config__.getInteger("gen.tin.inChunk"),
      minY: __config__.getInteger("gen.tin.minY"),
      maxY: __config__.getInteger("gen.tin.maxY")
    },

    silver: { //
      enabled: __config__.getBool("gen.silver.enabled"),
      size: __config__.getInteger("gen.silver.size"),
      inChunk: __config__.getInteger("gen.silver.inChunk"),
      minY: __config__.getInteger("gen.silver.minY"),
      maxY: __config__.getInteger("gen.silver.maxY")
    },

    lead: { //
      enabled: __config__.getBool("gen.lead.enabled"),
      size: __config__.getInteger("gen.lead.size"),
      inChunk: __config__.getInteger("gen.lead.inChunk"),
      minY: __config__.getInteger("gen.lead.minY"),
      maxY: __config__.getInteger("gen.lead.maxY")
    },

    nickel: { //
      enabled: __config__.getBool("gen.nickel.enabled"),
      size: __config__.getInteger("gen.nickel.size"),
      inChunk: __config__.getInteger("gen.nickel.inChunk"),
      minY: __config__.getInteger("gen.nickel.minY"),
      maxY: __config__.getInteger("gen.nickel.maxY")
    },

    sulfur: { //
      enabled: __config__.getBool("gen.sulfur.enabled"),
      size: __config__.getInteger("gen.sulfur.size"),
      inChunk: __config__.getInteger("gen.sulfur.inChunk"),
      minY: __config__.getInteger("gen.sulfur.minY"),
      maxY: __config__.getInteger("gen.sulfur.maxY")
    },

    apatite: { //
      enabled: __config__.getBool("gen.apatite.enabled"),
      size: __config__.getInteger("gen.apatite.size"),
      inChunk: __config__.getInteger("gen.apatite.inChunk"),
      minY: __config__.getInteger("gen.apatite.minY"),
      maxY: __config__.getInteger("gen.apatite.maxY")
    },

    oilSand: { //
      enabled: __config__.getBool("gen.oilSand.enabled"),
      chance: __config__.getInteger("gen.oilSand.chance"),
      size: __config__.getInteger("gen.oilSand.size")
    },

    niter: { //
      enabled: __config__.getBool("gen.niter.enabled"),
      size: __config__.getInteger("gen.niter.size"),
      inChunk: __config__.getInteger("gen.niter.inChunk"),
      minY: __config__.getInteger("gen.niter.minY"),
      maxY: __config__.getInteger("gen.niter.maxY")
    },

    cinnabar: { //
      enabled: __config__.getBool("gen.cinnabar.enabled"),
      size: __config__.getInteger("gen.cinnabar.size"),
      inChunk: __config__.getInteger("gen.cinnabar.inChunk"),
      minY: __config__.getInteger("gen.cinnabar.minY"),
      maxY: __config__.getInteger("gen.cinnabar.maxY")
    },

    sapphire: { //
      enabled: __config__.getBool("gen.sapphire.enabled"),
      size: __config__.getInteger("gen.sapphire.size"),
      inChunk: __config__.getInteger("gen.sapphire.inChunk"),
      minY: __config__.getInteger("gen.sapphire.minY"),
      maxY: __config__.getInteger("gen.sapphire.maxY")
    },

    ruby: { //
      enabled: __config__.getBool("gen.ruby.enabled"),
      size: __config__.getInteger("gen.ruby.size"),
      inChunk: __config__.getInteger("gen.ruby.inChunk"),
      minY: __config__.getInteger("gen.ruby.minY"),
      maxY: __config__.getInteger("gen.ruby.maxY")
    }
  }
};