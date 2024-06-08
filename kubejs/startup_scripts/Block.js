StartupEvents.registry("block", (event) => {
  const toolType = {
    sword: "minecraft:mineable/sword",
    pickaxe: "minecraft:mineable/pickaxe",
    axe: "minecraft:mineable/axe",
    shovel: "minecraft:mineable/shovel",
    hoe: "minecraft:mineable/hoe",
  }
  // 挖掘等级
  const miningLevel = {
    wooden: "minecraft:needs_wooden_tool",
    stone: "minecraft:needs_stone_tool",
    iron: "minecraft:needs_iron_tool",
    golded: "minecraft:needs_gold_tool",
    diamond: "minecraft:needs_diamond_tool",
    nether: "forge:needs_netherite_tool",
  }
  /**
   *
   * @param {string} ID -方块ID
   * @param {string} SoundType -方块破坏&放置声音
   * @param {number} Hardness -方块硬度
   * @param {number} ResisTance -方块爆炸抗性
   * @param {string|string[]} Tool -方块破坏需要的工具类型
   * @param {string} Grade -方块需要的工具材质
   */
  function customBlockBuilder(
    ID,
    SoundType,
    Hardness,
    ResisTance,
    Tool,
    Grade = ''
  ) {
    const block = event.create(ID)
      .soundType(SoundType)
      .hardness(Hardness)
      .resistance(ResisTance)
    if (Array.isArray(Tool)) {
      Tool.forEach(v => block.tagBlock(toolType[v]))
    } else {
      block.tagBlock(toolType[Tool])
    }

    if (!!Grade) {
      block.tagBlock(miningLevel[Grade])
        .requiresTool(true)
    }
  }
})
