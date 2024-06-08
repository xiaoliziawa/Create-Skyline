StartupEvents.registry("block", (event) => {
  const toolType = {
    sword: "minecraft:mineable/sword",
    pickaxe: "minecraft:mineable/pickaxe",
    axe: "minecraft:mineable/axe",
    shovel: "minecraft:mineable/shovel",
    hoe: "minecraft:mineable/hoe",
  };
  // 挖掘等级
  const miningLevel = {
    wooden: "minecraft:needs_wooden_tool",
    stone: "minecraft:needs_stone_tool",
    iron: "minecraft:needs_iron_tool",
    golden: "minecraft:needs_gold_tool",
    diamond: "minecraft:needs_diamond_tool",
    netherite: "forge:needs_netherite_tool",
  };
  /**
   *
   * @param {string} id 方块 ID
   * @param {Internal.soundEvent_} soundType 方块破坏&放置声音
   * @param {number} hardness 方块硬度
   * @param {number} resistance 方块爆炸抗性
   * @param {"sword"|"pickaxe"|"axe"|"shovel"|"hoe"} toolType 方块破坏需要的工具类型
   * @param {"wooden"|"stone"|"iron"|"golden"|"diamond"|"netherite"} miningLevel 方块需要的工具材质
   */
  function customBlockBuilder(id, soundType, hardness, resistance, toolType, miningLevel) {
    event
      .create(id)
      .soundType(soundType)
      .hardness(hardness)
      .resistance(resistance)
      .tagBlock(toolType[toolType])
      .tagBlock(miningLevel[miningLevel])
      .requiresTool(true);
  }
});
