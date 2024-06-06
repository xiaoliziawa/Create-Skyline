BlockEvents.rightClicked(e => {
    const { player, hand, block, server } = e

    if (hand.name() !== "MAIN_HAND") return


    /**
     * 
     * @param {string} blockID -方块ID
     * @param {string} resultItem -掉落物品
     * @param {number} random -掉落概率
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

    /**
     * 
     * @param {string} blockID -方块ID
     * @param {string} resultItem -掉落物品
     * @param {number} outputRandom -掉落概率
     * @param {number} emptyRandom -方块消失概率
     * @param {string} mainHandItem -需要手持的物品
     */
    let ItemCreate2 = (blockID, resultItem, ItemID, outputRandom, emptyRandom) => {
        if (block.id === blockID && player.isShiftKeyDown() && player.mainHandItem === ItemID) {
            let itemEntity = block.createEntity('item')
            itemEntity.item = resultItem
            itemEntity.x += 0.5
            itemEntity.y += 1
            itemEntity.z += 0.5
            let [blockX, blockY, blockZ] = [block.getX(), block.getY(), block.getZ()]
            if (Math.random() < outputRandom) {
                itemEntity.spawn()
            }
            if (Math.random() < emptyRandom) {
                server.runCommandSilent(`setblock ${blockX} ${blockY} ${blockZ} minecraft:air`)
            }
        }
    }

    // 基岩 => 石子
    ItemCreate('minecraft:bedrock', 'kubejs:stone_grain', 0.4)

    // 一重压缩圆石 => 砂砾
    ItemCreate('compressed:cobblestone_i', 'minecraft:gravel', 0.2)
    
    // 泥土 => 树木肥料
    ItemCreate2('minecraft:dirt','create:tree_fertilizer','exnihilosequentia:stone_crook',0.2,0.1)
})
