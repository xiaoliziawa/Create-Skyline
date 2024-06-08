StartupEvents.registry('block', e => {
  const ToolType = {
    sword: 'minecraft:mineable/sword',
    pickaxe: 'minecraft:mineable/pickaxe',
    axe: 'minecraft:mineable/axe',
    shovel: 'minecraft:mineable/shovel',
    hoe: 'minecraft:mineable/hoe'
  }
  // 挖掘等级
  const MiningLevel = {
    wooden: 'minecraft:needs_wooden_tool',
    stone: 'minecraft:needs_stone_tool',
    iron: 'minecraft:needs_iron_tool',
    golded: 'minecraft:needs_gold_tool',
    diamond: 'minecraft:needs_diamond_tool',
    nether: 'forge:needs_netherite_tool'
  }
  /**
   * 
   * @param {string} ID -方块ID
   * @param {string} SoundType -方块破坏&放置声音
   * @param {number} Hardness -方块硬度
   * @param {number} Resistance -方块爆炸抗性
   * @param {string|string[]} Tool -方块破坏需要的工具类型
   * @param {string} Grade -方块需要的工具材质
   */
  let blockAdd = (ID, SoundType, Hardness, Resistance, Tool, Grade = '') => {
    const block = e.create(ID)
      .soundType(SoundType)
      .hardness(Hardness)
      .resistance(Resistance)
      .tagBlock(MiningLevel[Grade]);

    if(!!Grade){ // NOTE: 如果 Grade 不传则视为不需要工具 空字符串同样被视为不需要工具
      block.tagBlock(MiningLevel[Grade]);
      block.requiresTool(true);
    }

    if (Array.isArray(Tool)) {
      Tool.forEach(v => block.tagBlock(ToolType[Tool]));
    } else {
      block.tagBlock(ToolType[Tool])
    }
  }
})