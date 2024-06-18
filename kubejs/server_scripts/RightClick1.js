function randomRange(min, max) {
  return Utils.random.nextInt(min, max + 1)
}

/**
*
* @param {Special.Block} blockId
* @param {Special.Item} itemId
* @param {Special.Item} dropItemId
* @param {number} [random = 3]
*/
const dropWithItemClicked = (blockId, itemId, dropItemId, random) => {
  if (random === undefined) random = 3

  BlockEvents.rightClicked(blockId, (event) => {
    if (event.hand.name() != 'MAIN_HAND') return
    const { player, block } = event
    if (
      player.mainHandItem.id == itemId &&
      randomRange(1, 10) < random
    ) {
      player.mainHandItem.count--
      block.popItem(dropItemId)
      block.set('air')
    }
  })
}

/**
*
* @param {Special.Block} blockId 方块 ID
* @param {Special.Item} resultItem 掉落物品
* @param {number} random 掉落概率
*/
function spawnItem1(blockId, resultItem, random) {
  BlockEvents.rightClicked(blockId, (event) => {

    if (event.hand.name() != 'MAIN_HAND') return
    const { player, block } = event

    if (player.isCrouching()) {
      if (Math.random() < random) {
        block.popItemFromFace(resultItem, 'up')
      }
    }
  })
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
  BlockEvents.rightClicked(blockId, (event) => {

    if (event.hand.name() != 'MAIN_HAND') return
    const { player, block } = event

    if (
      block.id === blockId &&
      player.isCrouching() &&
      player.mainHandItem.id === mainHandItem
    ) {
      if (Math.random() < outputRandom) {
        block.popItemFromFace(resultItem, 'up')
      }
      if (Math.random() < emptyRandom) {
        block.set('air')
      }
    }
  })
}

/**
*
* @param {Special.Block} blockId 方块 ID
* @param {Special.Item} resultItem 掉落物品
* @param {Special.Item} itemId 物品 ID
* @param {number} emptyRandom 方块消失概率
* @param {Special.Item} mainHandItem 需要手持的物品
*/
function spawnItem3(blockId, resultItem, itemId, outputRandom, emptyRandom) {
  BlockEvents.rightClicked(blockId, (event) => {

    if (event.hand.name() != 'MAIN_HAND') return
    const { player, block } = event

    if (player.mainHandItem.id === itemId) {
      if (Math.random() < outputRandom) {
        block.popItemFromFace(resultItem, 'up')
        item.count--
      }
      if (Math.random() < emptyRandom) {
        block.set('air')
      }
    }
  })
}

/**
*
* @param {Special.Block} blockId
* @param {Special.Item} resultItem
* @param {number} customRandomMin
* @param {number} customRandomMax
* @param {number} customRandomNum
*/
function customRandomItemSpawn(blockId, resultItem, customRandomMin, customRandomMax, customRandomNum) {
  BlockEvents.rightClicked(blockId, (event) => {

    if (event.hand.name() != 'MAIN_HAND') return
    const { block } = event

    if (randomRange(customRandomMin, customRandomMax) < customRandomNum) {
      block.popItemFromFace(resultItem, 'up')
    }
  })
}

dropWithItemClicked(
  'minecraft:dirt',
  'minecraft:bone_meal',
  'exnihilosequentia:grass_seeds')

// 基岩 => 石子
spawnItem1(
  'minecraft:bedrock',
  'kubejs:stone_grain',
  0.4)

// 一重压缩圆石 => 砂砾
spawnItem1(
  'compressed:cobblestone_i',
  'minecraft:gravel',
  0.2)

// 凝灰岩 => 安山石子
customRandomItemSpawn(
  'minecraft:tuff',
  'exnihilosequentia:andesite_pebble',
  1,
  10,
  3)

// 泥土 => 树木肥料
spawnItem2(
  'minecraft:dirt',
  'create:tree_fertilizer',
  'exnihilosequentia:stone_crook',
  0.2,
  0.1
)

//霜石碎片
spawnItem3(
  'minecraft:dirt',
  'mmt:frostite_shard',
  'create:tree_fertilizer',
  0.12,
  0.1
)