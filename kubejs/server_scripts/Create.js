ServerEvents.recipes((event) => {
    const { create, kubejs } = event.recipes
    // Create Heat JS 测试
    create.mixing(
        Fluid.of('minecraft:lava',25),
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

    // 安山合金液
    create.mixing(
        Fluid.of('kubejs:andesite_fluid', 100),[
            'minecraft:iron_nugget',
            'minecraft:andesite',
            Fluid.of('minecraft:lava',50)
        ]
    )
    kubejs.shaped(
        'create:andesite_alloy',
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'minecraft:iron_nugget',
            B:'minecraft:andesite'
        }
    )

    // 闪长岩
    create.filling(
        'minecraft:diorite',[
            Fluid.of('minecraft:water', 500),
            'minecraft:cobblestone'
        ]
    )

    // 花岗岩
    create.filling(
        'minecraft:granite',[
            Fluid.of('minecraft:lava', 100),
            'minecraft:diorite'
        ]
    )

    // 沙子 ==> 黏土+铜粒
    create.splashing([
            Item.of('6x create:copper_nugget').withChance(0.3),
            Item.of('minecraft:clay_ball').withChance(0.4),
            Item.of('3x minecraft:clay_ball').withChance(0.3)
        ],
        'minecraft:sand'
    )

    // 黏土 ==> 海带，海草，海泡菜
    create.splashing([
            Item.of('minecraft:kelp').withChance(0.3),
            Item.of('minecraft:seagrass').withChance(0.35),
            Item.of('minecraft:sea_pickle').withChance(0.35)
        ],
        'minecraft:clay'
    )
})