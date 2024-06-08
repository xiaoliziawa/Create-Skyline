BlockEvents.rightClicked((event) => {
  const { player, item, block } = event

  /**
   * @param {number} min 最小值
   * @param {number} max 最大值
   * @returns {number}
   */
  function randomRange(min, max) {
    return Utils.random.nextInt(min, max + 1)
  }

  /**
   * @param {string} blockId 使用的方块 ID
   * @param {string} setBlockId 放置的方块 ID
   * @param {string} itemId 需要手持的物品 ID
   * @param {number} chance 概率
   */
  function BlockSet(blockId, setBlockId, itemId, chance) {
    if (player.mainHandItem.id !== itemId) return
    if (
      block.id === blockId &&
      player.mainHandItem.id === itemId &&
      Math.random() < chance
    ) {
      item.count = 0
      block.set(setBlockId)
    }
  }
  BlockSet("minecraft:dirt", "minecraft:water", "mmt:frostite_shard", 0.1)
})
