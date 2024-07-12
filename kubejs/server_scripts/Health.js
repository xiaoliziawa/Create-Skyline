// 懒得打计分板的名字了(((((
const SCOREBOARD_NAME = 'health_reduction';

ServerEvents.loaded(event => {
    event.server.runCommandSilent(`scoreboard objectives add ${SCOREBOARD_NAME} dummy "Health"`);
    event.server.players.forEach(player => {
        initializePlayer(player);
    });
});
//  ↑↑↑ 相联系，加载进世界后重新给玩家上一遍计分板, 防止遗漏
function initializePlayer(player) {
    // 如果玩家的计分板没有分数，将玩家的分数设置为0
    player.runCommandSilent(`scoreboard players add @s ${SCOREBOARD_NAME} 0`);
    applyHealthReduction(player);
}

function applyHealthReduction(player) {
    // 获取玩家的生命值减少分数
    let reduction = player.persistentData.getInt(SCOREBOARD_NAME);

    // 确保减少的是一个有效的数字，且在0到19之间, 不然是NaN直接和你爆了！
    reduction = Math.max(0, Math.min(19, Math.floor(reduction)));
    player.persistentData.putInt(SCOREBOARD_NAME, reduction);
    player.runCommandSilent(`scoreboard players set @s ${SCOREBOARD_NAME} ${reduction}`);

    const newMaxHealth = Math.max(1, 20 - reduction);

    // modifyAttribute修改生命值
    player.modifyAttribute('minecraft:generic.max_health', 'health_reduction', -reduction, 'addition');

    // 确保当前生命值不超过新的最大生命值
    player.health = Math.min(player.health, newMaxHealth);

    player.tell(Text.of(`你的最大生命值现在是: ${newMaxHealth}`).red());
}

// 在玩家加入时检查并应用生命值减少
PlayerEvents.loggedIn(event => {
    initializePlayer(event.player);
});

// 实体死亡时触发
EntityEvents.death(event => {
    if (event.entity.type == 'minecraft:player') {
        const player = event.entity;
        let currentScore = player.persistentData.getInt(SCOREBOARD_NAME);
        if (currentScore < 19) {
            currentScore++;
            player.persistentData.putInt(SCOREBOARD_NAME, currentScore);
            player.runCommandSilent(`scoreboard players set @s ${SCOREBOARD_NAME} ${currentScore}`);
        }
    }
});

// 重生的时候触发生命减少
PlayerEvents.respawned(event => {
    applyHealthReduction(event.player);
});
