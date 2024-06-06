ServerEvents.recipes(e => {
    // 桶 => 水 => 水桶
    e.custom({
        "type": "lychee:item_inside",
        "item_in": {"item": "bucket"},
        "block_in": {"blocks": ["minecraft:water"],},
        "post": [
            {"type": "drop_item","item": "water_bucket"},
            {"type": "place", "block": "air"}
        ]
    })
    // 水桶 => 空气 => 桶
    e.custom({
        "type": "lychee:item_inside",
        "item_in": {"item": "minecraft:water_bucket"},
        "block_in": {"blocks": ["minecraft:air"],},
        "post": [
            {"type": "drop_item","item": "bucket"},
            { "type": "place", "block": "water" }
        ]
    })

    // 9x 树木肥料 => 有机肥
    e.custom({
        "type": "lychee:item_inside",
        "item_in": [
            { "item": "create:tree_fertilizer"}, { "item": "create:tree_fertilizer" }, { "item": "create:tree_fertilizer" },
            { "item": "create:tree_fertilizer" }, { "item": "create:tree_fertilizer" }, { "item": "create:tree_fertilizer" },
            { "item": "create:tree_fertilizer" }, { "item": "create:tree_fertilizer" }, { "item": "create:tree_fertilizer" }
        ],
        "block_in": { "blocks": ["water"] },
        "post": [
            { "type": "place", "block": "air" },
            {"type": "drop_item","item":"farmersdelight:organic_compost"}
        ]
    })
})
