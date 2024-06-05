BlockEvents.rightClicked(e => {
    const { player, hand, block } = e

    if (hand.name() !== "MAIN_HAND") return

    /**
     * 
     * @param {string} blockID - 方块ID
     * @param {string} resultItem - 物品ID
     * @param {number} random - 概率
     */

    let ItemCreate = (blockID, resultItem, random) => {
        if (block.id === blockID && player.isShiftKeyDown()) {
            let itemEntity = block.createEntity('item')
            itemEntity.item = resultItem
            itemEntity.x += 0.5
            itemEntity.y += 1
            itemEntity.z += 0.5

            if (Math.random() < random) {
                itemEntity.spawn()
            }
        }
    }

    // 石子 => 右键基岩获取石子
    ItemCreate('minecraft:bedrock', 'kubejs:stone_grain', 0.4)
})
