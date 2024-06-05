StartupEvents.registry('minecraft:item', e => {
    /**
     * 
     * @param {string} Id 
     * @param {string} Rarity 
     * @param {boolean} Glow 
    */
    
    let ItemCreate = (Id, Rarity, Glow) => { e.create(Id).rarity(Rarity).glow(Glow) }
    
    // 石子
    ItemCreate('stone_grain', 'common', false)
})