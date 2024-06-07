BlockEvents.rightClicked(e => {
    const { player, server, item, block } = e

    /**
     * 
     * @param {number} min -最小值
     * @param {number} max -最大值 
     * @returns 
     */
    function RandomRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    /**
     * 
     * @param {string} blockID -使用的方块ID
     * @param {string} setBlockID -放置的方块ID
     * @param {string} ItemID -需要手持的物品ID
     * @param {number} Random -概率
     * @returns 
     */
    let BlockSet = (blockID, setBlockID, ItemID, Random) => {
        if (player.mainHandItem != ItemID) return
        if (block.id === blockID && player.mainHandItem === ItemID && Math.random() < Random) {
            item.setCount(0)
            block.set(setBlockID)    
        }
    }
    BlockSet('minecraft:dirt','minecraft:water','mmt:frostite_shard',0.1)
})