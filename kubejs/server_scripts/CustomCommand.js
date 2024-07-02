ServerEvents.commandRegistry(event => {
  const { commands: Commands, arguments: Arguments } = event

  // 注册指令(fly和god)
  event.register(Commands.literal('fly')
    .executes(c => fly(c.source.player))
    .then(Commands.argument('target', Arguments.PLAYER.create(event))
      .executes(c => fly(Arguments.PLAYER.getResult(c, 'target')))
    )
  )

  event.register(Commands.literal('god')
    .executes(c => god(c.source.player))
    .then(Commands.argument('target', Arguments.PLAYER.create(event))
      .executes(c => god(Arguments.PLAYER.getResult(c, 'target')))
    )
  )

  // 当玩家输入的时候执行的function
  let fly = (player) => {
    if (player.abilities.mayfly) {
      player.abilities.mayfly = false
      player.abilities.flying = false
      player.displayClientMessage(Component.gold('Flying: ').append(Component.red('disabled')), true)
    } else {
      player.abilities.mayfly = true
      player.displayClientMessage(Component.gold('Flying: ').append(Component.green('enabled')), true)
    }
    player.onUpdateAbilities()
    return 1
  }

  let god = (player) => {
    if (player.abilities.invulnerable) {
      player.abilities.invulnerable = false
      player.displayClientMessage(Component.gold('God mode: ').append(Component.red('disabled')), true)
    } else {
      player.abilities.invulnerable = true
      player.displayClientMessage(Component.gold('God mode: ').append(Component.green('enabled')), true)
    }
    player.onUpdateAbilities()
    return 1
  }
})
