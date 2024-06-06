ServerEvents.recipes(e => {
    const { minecraft, create } = e.recipes
    
    // 圆石
    minecraft.crafting_shapeless('minecraft:cobblestone', [
        '4x kubejs:stone_grain'
    ])

    // 石棍
    minecraft.crafting_shaped('kubejs:stone_rod', [
        'A  ',
        'A  '
    ], {
        A: "#forge:cobblestone"
    })

    // 泥土
    minecraft.crafting_shapeless('minecraft:dirt', [
        '2x minecraft:sand',
        '2x minecraft:gravel'
    ])

    //石钩子
    minecraft.crafting_shaped('exnihilosequentia:stone_crook', [
        'AA ',
        ' A ',
        ' A '
    ], {
        A: 'kubejs:stone_grain'
    })
})