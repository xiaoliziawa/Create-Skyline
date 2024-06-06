ServerEvents.tags('item', e => {
    let Tags = [
        ['forge:rods', 'kubejs:stone_rod'],
    ]

    Tags.forEach(([addTags, ItemId]) => {
        e.add(addTags, [ItemId])
    })
})