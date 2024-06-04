StartupEvents.registry('minecraft:item', e => {
    let ItemCreate = (Id, Rarity, Glow) => { e.create(Id).rarity(Rarity).glow(Glow) }
    
    // 石子
    ItemCreate('stone_grain','common',false)
})