StartupEvents.registry('minecraft:item', e => {
    /**
     * 
     * @param {string} Id -注册方块ID
     * @param {string} Rarity -注册方块稀有度
     * @param {boolean} Glow -注册方块是否发光
     * 
    */
    let ItemCreate = (Id, Rarity, Glow) => { e.create(Id).rarity(Rarity).glow(Glow) }
    
    let ItemAdd = [
        ['stone_grain', 'common', false], //石子
        ['stone_rod', 'common', false] //石棍
    ]

    ItemAdd.forEach(([ids, rarity, glow]) => [
        ItemCreate(ids,rarity,glow)
    ])

})