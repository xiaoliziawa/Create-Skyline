LootJS.modifiers((event) => {
    event.addBlockLootModifier('farmersdelight:organic_compost')
        .matchMainHand('#exnihilosequentia:hammer')
        .removeLoot(Ingredient.all)
        .addLoot('2x minecraft:bone_meal')
})