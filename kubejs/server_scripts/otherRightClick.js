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
   * @param {Special.Block} blockId 使用的方块 ID
   * @param {Special.Block} setBlockId 放置的方块 ID
   * @param {Special.Item} itemId 需要手持的物品 ID
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
  BlockSet(
    'minecraft:dirt',
    'minecraft:water',
    'mmt:frostite_shard',
    0.1
  )

  // 取消工作台右键
  // if (block.id === 'minecraft:crafting_table') {
  //   event.cancel()
  // }
})
