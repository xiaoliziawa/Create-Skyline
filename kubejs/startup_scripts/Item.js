StartupEvents.registry('minecraft:item', e => {
    /**
     * 
     * @param {string} Id -注册方块ID
     * @param {string} Rarity -注册方块稀有度 默认 `common`
     * @param {boolean} Glow -注册方块是否发光 默认不发光
     * 
    */
    let ItemCreate = (Id, Rarity = 'common', Glow = false) => e.create(Id).rarity(Rarity).glow(Glow);

    let ItemAdd = [
        ['stone_grain', 'common', false], //石子
        ['stone_rod', 'common', false] //石棍
    ];

    ItemAdd.forEach(([ids, rarity, glow]) => [
        ItemCreate(ids, rarity, glow)
    ]);

})