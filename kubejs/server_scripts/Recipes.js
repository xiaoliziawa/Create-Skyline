ServerEvents.recipes((event) => {
  const { kubejs, create, minecraft } = event.recipes

  // 圆石
  kubejs.shapeless(
    'minecraft:cobblestone', [
    '4x kubejs:stone_grain',
  ])

  // 石棍
  kubejs.shaped(
    'kubejs:stone_rod',
    ['A  ', 'A  '],
    {
    A: '#forge:cobblestone',
  })

  // 泥土
  kubejs.shapeless(
    'minecraft:dirt', [
    '2x minecraft:sand',
    '2x minecraft:gravel',
  ])

  // 石钩子
  kubejs.shaped(
    'exnihilosequentia:stone_crook',
    ['AA ', ' A ', ' A '],
    {
      A: 'kubejs:stone_grain',
    }
  )

  // 安山机壳
  kubejs.shaped(
    '5x create:andesite_casing',
    ['BAB', 'ABA', 'BAB'],
    {
      A: 'create:andesite_alloy',
      B: '#forge:stripped_logs',
    }
  )
})
