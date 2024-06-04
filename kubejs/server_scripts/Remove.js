ServerEvents.recipes(e => {
    let Remove = [
        'minecraft:cobblestone',
    ]
    Remove.forEach(id => {
        e.remove({ output:id})
    })
})