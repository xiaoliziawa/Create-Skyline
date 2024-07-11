StartupEvents.registry('item', event => {
    event.create('test_sword', 'sword')
})

ItemEvents.modification(event => {
    event.modify('kubejs:test_sword', modify => {
        modify.maxDamage = -1
    })
})