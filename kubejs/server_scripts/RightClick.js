BlockEvents.rightClicked(e => {
    const { player, server, hand, item, block } = e
    if (hand.name() != "MAIN_HAND") return

    ItemCreate('minecraft:bedrock', 'kubejs:stone_grain', 0.4)
    
    function ItemCreate(BlockID, ResultItem, Random) {
        if (block.id == BlockID && player.isShiftKeyDown()) {
            let itemEntity = block.createEntity('item')
            itemEntity.item = ResultItem
            itemEntity.x += 0.5
            itemEntity.y += 1
            itemEntity.z += 0.5
            if (Math.random() < Random) {
                itemEntity.spawn()
            }
        }
    }
})