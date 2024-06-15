LootJS.modifiers((event) => {
    event.addBlockLootModifier('farmersdelight:organic_compost')
        .matchMainHand('#exnihilosequentia:hammer')
        .removeLoot(Ingredient.all)
        .addLoot('2x minecraft:bone_meal');

    event.addBlockLootModifier('minecraft:tall_grass')
        .addAlternativesLoot(
            LootEntry.of('minecraft:oak_sapling')
                .when(loots => loots.randomChance(0.1))
        );
});
