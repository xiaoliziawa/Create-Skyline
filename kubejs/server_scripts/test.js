let $SimpleMenuProvider = Java.loadClass('net.minecraft.world.SimpleMenuProvider')
let $CraftingMenu = Java.loadClass('net.minecraft.world.inventory.CraftingMenu')
let $Optional = Java.loadClass(`java.util.Optional`)

BlockEvents.rightClicked('grass_block', (event) => {
    const { player, level, block } = event

    if (level.clientSide) return

    player.openMenu(
        new $SimpleMenuProvider((i, inv, p) => {
            return new $CraftingMenu(i, inv, (func) => {
                func.apply(level, block.pos)
                return $Optional.empty()
            })
        }, '工作台')
    )

    player.swing()
})
