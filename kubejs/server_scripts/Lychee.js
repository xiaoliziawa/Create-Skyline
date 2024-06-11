

ServerEvents.recipes((event) => {
  /**
   * 
   * @param {event} event 传入事件
   * @param {{item:Special.Item}} item_in 需要扔出的物品
   * @param {{blocks:Array<Special.Block>}} block_in 扔出物品进入的方块
   * @param {Special.Item} drop_item 输出物品
   * @param {Special.Block} place_block 替换原方块的方块
  */
  // Lychee Item_In event function
  function createRecipe(event, item_in, block_in, drop_item, place_block) {
    event.custom({
      type: "lychee:item_inside",
      item_in: item_in,
      block_in: block_in,
      post: [
        { type: "drop_item", item: drop_item },
        { type: "place", block: place_block },
      ],
    })
  }
  // 桶 => 水 => 水桶
  createRecipe(
    event,
    { item: "bucket" },
    { blocks: ["water"] },
    "minecraft:water_bucket", 
    "minecraft:air"
  )

  // 水桶 => 空气 => 桶
  createRecipe(
    event,
    { item: "minecraft:water_bucket" },
    "*",
    "minecraft:bucket",
    "minecraft:water"
  )

  // 9x 树木肥料 => 有机肥
  createRecipe(
    event,
    Array(9).fill({ item: "create:tree_fertilizer" }),
    { blocks: ["water"] },
    "farmersdelight:organic_compost",
    "minecraft:air"
  )
})
