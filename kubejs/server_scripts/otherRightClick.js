BlockEvents.rightClicked((event) => {
  const { player, item, block } = event

  /**
   * @param {string} blockId 使用的方块 ID
   * @param {string} setBlockId 放置的方块 ID
   * @param {string} itemId 需要手持的物品 ID
   * @param {number} chance 概率
   */

  // 水方块放置
  function BlockSet(blockId, setBlockId, itemId, chance) {
    if (player.mainHandItem.id !== itemId) return
    const itemCount = player.mainHandItem.getCount()
    if (
      block.id === blockId &&
      player.mainHandItem.id === itemId &&
      Math.random() < chance &&
      itemCount == 64
    ) {
      item.count = 0
      block.set(setBlockId)
    }
  }
  BlockSet("minecraft:dirt", "minecraft:water", "mmt:frostite_shard", 0.1)
})
