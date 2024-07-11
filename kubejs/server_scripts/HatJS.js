ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event;

    event.register(
        Commands.literal('hat')
            .executes(context => {
                const player = context.source.getPlayer();
                if (!player) return false;

                const mainHandItem = player.getMainHandItem();
                const headSlot = player.getInventory().armor.get(3);

                if (mainHandItem.isEmpty()) {
                    player.sendSystemMessage(Text.of('你的手中没有物品!'));
                    return false;
                }

                const itemInHead = mainHandItem.copy();
                itemInHead.setCount(1);

                if (!headSlot.isEmpty()) {
                    const headItem = headSlot.copy();
                    player.getInventory().armor.set(3, itemInHead);
                    player.setItemInHand(net.minecraft.world.InteractionHand.MAIN_HAND, headItem);
                } else {
                    player.getInventory().armor.set(3, itemInHead);
                    mainHandItem.shrink(1);
                    if (mainHandItem.isEmpty()) {
                        player.setItemInHand(net.minecraft.world.InteractionHand.MAIN_HAND, ItemStack.EMPTY);
                    }
                }

                player.sendSystemMessage(Text.of('成功将物品放到头上!'));
                return true;
            })
    );
});
