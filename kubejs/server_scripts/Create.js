ServerEvents.recipes((event) => {
    const { create } = event.recipes
    // Create Heat JS 测试
    create.mixing(
        Fluid.of('minecraft:lava',50),
        'minecraft:cobblestone'
    ).heatLevel('Fire')

    // 凝灰岩
    create.splashing(
        'minecraft:tuff',
        'minecraft:cobblestone'
    ).processingTime(10)

    // 铁板修复
    create.pressing(
        'create:iron_sheet',
        '#forge:ingots/iron'
    )
})