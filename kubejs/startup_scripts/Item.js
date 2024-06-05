StartupEvents.registry('minecraft:item', e => {
    /**
     * 
     * @param {string} Id -注册方块ID
     * @param {string} Rarity -注册方块稀有度
     * @param {boolean} Glow -注册方块是否发光
     * 
    */
    
    let ItemCreate = (Id, Rarity, Glow) => { e.create(Id).rarity(Rarity).glow(Glow) }
    
    // 石子
    ItemCreate('stone_grain', 'common', false)
})