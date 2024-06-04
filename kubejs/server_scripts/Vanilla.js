ServerEvents.recipes(e => {
    const { minecraft, create } = e.recipes
    
    // 圆石
    minecraft.crafting_shapeless('minecraft:cobblestone', [
        '4x kubejs:stone_grain'
    ])
})