ServerEvents.recipes((event) => {
    event.recipes.create.mixing('minecraft:diamond','minecraft:coal').heatLevel('TEST')
})