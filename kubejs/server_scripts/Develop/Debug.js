ItemEvents.rightClicked(e => {
    const { item, player, server } = e
    const itemId = item.id
    const mainHandItem = player.mainHandItem
    const isHoldingItem = mainHandItem !== "minecraft:air"

    if (isHoldingItem) {
        if (mainHandItem === itemId && player.shiftKeyDown) {
            player.runCommandSilent('kubejs hand')
        }

        if (mainHandItem === 'minecraft:diamond') {
            server.runCommandSilent('tellraw @a "正在重新加载"')
            player.runCommandSilent('reload')
        }
    }
})
