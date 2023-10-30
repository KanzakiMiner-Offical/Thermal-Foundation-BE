class DebugIem extends ItemCommon implements ItemBehavior {
    constructor(stringID: string, name: string, icon: string) {
        super(stringID, name, icon);
        this.setMaxStack(1);
        this.setCategory(ItemCategory.EQUIPMENT);
    }

    onItemUse(coords: Callback.ItemUseCoordinates, item: ItemStack, block: Tile, player: number): void {
        let blockSource = BlockSource.getDefaultForActor(player)
        Debug.big(blockSource.getBlockEntity(coords.x, coords.y, coords.z).getCompoundTag().getListTagNoClone("Occupants").length())
        let state = blockSource.getBlock(coords.x, coords.y, coords.z);
        let honeyLevel = state.hasState(EBlockStates.BEEHIVE_HONEY_LEVEL) ? state.getState(EBlockStates.BEEHIVE_HONEY_LEVEL) : 0;
        Debug.big(honeyLevel)
        Debug.big(state.getStatesScriptable())
    }
}

ItemRegistry.registerItem(new DebugIem("TF_more_debug", "WTF", "stick"))

class HoneyDebug extends DebugIem {
    constructor(stringID: string, name: string, icon: string) {
        super(stringID, name, icon);
    }

    onItemUse(coords: Callback.ItemUseCoordinates, item: ItemStack, blocks: Tile, player: number): void {
        let region = WorldRegion.getForActor(player);
        let blockSource = BlockSource.getDefaultForActor(player)
        const block = region.getBlock(coords);
        if (block.id == VanillaBlockID.beehive) {
            const states = { 150: 0 };
            const block2 = new BlockState(VanillaBlockID.beehive, states);
            const CompoundTag = blockSource.getBlockEntity(coords.x, coords.y, coords.z).getCompoundTag()
            region.setBlock(coords, block2);
            blockSource.getBlockEntity(coords.x, coords.y, coords.z).setCompoundTag(CompoundTag)
        }
    }
}

ItemRegistry.registerItem(new HoneyDebug("TF_honey_debug", "WTF HONEY", "stick"))