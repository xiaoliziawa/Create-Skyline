ServerEvents.recipes((event) => {
    const { create } = event.recipes
    create.mixing(
        'minecraft:diamond',
        'minecraft:coal'
    ).heatLevel('TEST')
    
    create.splashing(
        'minecraft:tuff',
        'minecraft:cobblestone'
    ).processingTime(10)    
})