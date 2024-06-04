ItemEvents.rightClicked(e => {
    const { item, player, server } = e

    const itemId = item.id
    const mainHandItem = player.mainHandItem
    const isHoldingItem = mainHandItem !== "minecraft:air"

    if (mainHandItem === itemId && player.shiftKeyDown && isHoldingItem) {
        player.runCommandSilent('kubejs hand')
    }

    if (mainHandItem === 'minecraft:diamond' && isHoldingItem) {
        server.runCommandSilent('tellraw @a "正在重新加载"')
        player.runCommandSilent('reload')
    }
})