(() => {
    let timerMap = {};

    EntityEvents.hurt(event => {

        if (event.source.actual && event.source.actual.isPlayer()) {

            let { entity, source } = event;
            let { player } = source;

            let playerUuid = player.getStringUuid();

            let fnRemove = () => {
                player.paint({
                    text_global_hitHealthShow_0: {
                        remove: true
                    }, rect_global_hitHealthShow_1: {
                        remove: true
                    }, rect_global_hitHealthShow_2: {
                        remove: true
                    }
                })
            }

            if (entity.health - event.damage > 0) {

                if (timerMap[playerUuid]) {
                    event.server.getScheduledEvents().clear(timerMap[playerUuid]);
                    timerMap[playerUuid] = undefined;
                }

                let { maxHealth, health } = entity;
                health = health - event.getDamage();

                let healthPercent = health / maxHealth;

                let colorSection__red = parseInt(255 * (1 - healthPercent)).toString(16).padStart(2, 0);
                let colorSection__green = parseInt(255 * healthPercent).toString(16).padStart(2, 0);

                player.paint({
                    text_global_hitHealthShow_0: {
                        type: 'text',
                        text: [`${parseInt(health)}/${maxHealth}`],
                        x: 10, y: 10,
                    },
                    rect_global_hitHealthShow_1: {
                        type: 'rectangle',
                        x: 10, y: 20, w: 100, h: 10,
                        color: '#ffffff'
                    },
                    rect_global_hitHealthShow_2: {
                        type: 'rectangle',
                        x: 10, y: 20, w: parseInt(100 * (health / maxHealth)), h: 10,
                        color: `#${colorSection__red}${colorSection__green}00`
                    }
                });

                timerMap[playerUuid] = event.server.scheduleInTicks(100, () => {
                    fnRemove();
                }).id;
            } else {
                fnRemove();
            }
        }
    });
})();