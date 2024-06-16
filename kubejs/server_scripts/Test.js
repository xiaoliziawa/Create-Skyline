ItemEvents.rightClicked(event => {
    const { player } = event
    if (player.mainHandItem === "stick") {
        var allWoodIds = []
        Ingredient.of('#minecraft:logs').getItemIds().forEach(Ids => {
            allWoodIds.push(Ids)
        })
        console.log(`[${allWoodIds.join(',\n ')}]`)
    }
})
