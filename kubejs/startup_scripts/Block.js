StartupEvents.registry('block', e => {
    const ToolType = {
		sword: 'minecraft:mineable/sword',
		pickaxe: 'minecraft:mineable/pickaxe',
		axe: 'minecraft:mineable/axe',
		shovel: 'minecraft:mineable/shovel',
		hoe: 'minecraft:mineable/hoe'
	}
	// 挖掘等级
	const MininGlevel = {
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
     * @param {number} ResisTance -方块爆炸抗性
     * @param {string} Tool -方块破坏需要的工具类型
     * @param {string} Grade -方块需要的工具材质
     */
    let blockAdd = (ID, SoundType, Hardness, ResisTance, Tool,Grade) => {
        e.create(ID)
            .soundType(SoundType)
            .hardness(Hardness)
            .resistance(ResisTance)
            .tagBlock(ToolType[Tool])
            .tagBlock(MininGlevel[Grade])
            .requiresTool(true)
    }
})