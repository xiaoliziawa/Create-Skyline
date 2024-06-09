BlockEvents.rightClicked((event) => {
  const { player, hand, block, server, item } = event
  
  /**
 * 生成一个介于 min 和 max 之间的随机整数，包含 min 和 max
 * @param {number} min 最小值
 * @param {number} max 最大值
 * @returns {number} 随机整数
 */
  
  function randomRange(min, max) {
    return Utils.random.nextInt(min, max + 1)
  }
  

  if (hand.name() !== "MAIN_HAND") return

  /**
   *
   * @param {Special.Block} blockId 方块 ID
   * @param {Special.Item} resultItem 掉落物品
   * @param {number} random 掉落概率
   */
  function spawnItem1(blockId, resultItem, random) {
    if (block.id === blockId && player.isCrouching()) {
      if (Math.random() < random) {
        block.popItemFromFace(resultItem, "up")
      }
    }
  }

  /**
   * @param {Special.Block} blockId 方块ID
   * @param {Special.Item} resultItem 掉落物品
   * @param {number} outputRandom 掉落概率
   * @param {number} emptyRandom 方块消失概率
   * @param {string} mainHandItem 需要手持的物品
   */
  function spawnItem2(
    blockId,
    resultItem,
    mainHandItem,
    outputRandom,
    emptyRandom
  ) {
    if (
      block.id === blockId &&
      player.isCrouching() &&
      player.mainHandItem.id === mainHandItem
    ) {
      if (Math.random() < outputRandom) {
        block.popItemFromFace(resultItem, "up")
      }
      if (Math.random() < emptyRandom) {
        block.set("air")
      }
    }
  }

  /**
   *
   * @param {Special.Block} blockID 方块 ID
   * @param {Special.Item} resultItem 掉落物品
   * @param {Special.Item} itemId 物品 ID
   * @param {number} emptyRandom 方块消失概率
   * @param {Special.Item} mainHandItem 需要手持的物品
   */
  function spawnItem3(blockID, resultItem, itemId, outputRandom, emptyRandom) {
    if (block.id === blockID && player.mainHandItem.id === itemId) {
      if (Math.random() < outputRandom) {
        block.popItemFromFace(resultItem, "up")
        item.count--
      }
      if (Math.random() < emptyRandom) {
        block.set("air")
      }
    }
  }

  // 基岩 => 石子
  spawnItem1("minecraft:bedrock", "kubejs:stone_grain", 0.4)

  // 一重压缩圆石 => 砂砾
  spawnItem1("compressed:cobblestone_i", "minecraft:gravel", 0.2)

  // 泥土 => 树木肥料
  spawnItem2(
    "minecraft:dirt",
    "create:tree_fertilizer",
    "exnihilosequentia:stone_crook",
    0.2,
    0.1
  )

  //霜石碎片
  spawnItem3(
    "minecraft:dirt",
    "mmt:frostite_shard",
    "create:tree_fertilizer",
    0.12,
    0.1
  )

  // 骨粉右键泥土掉落草籽
  if (
    player.mainHandItem.id == "minecraft:bone_meal" && 
    block.id == "minecraft:dirt" &&
    randomRange(1,10) < 3
  ) {
    player.mainHandItem.count--
    block.popItem("exnihilosequentia:grass_seeds")
    block.set("air")
  }
})
