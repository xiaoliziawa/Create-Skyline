ServerEvents.tags('item', (event) => {
  /** @type {[[Special.ItemTag, Special.Item[]]]} */
  let Tags = [
    ['forge:rods', ['kubejs:stone_rod']],
    ['forge:grass', ['minecraft:tall_grass', 'minecraft:grass']]
  ]

  Tags.forEach(([tagName, itemIds]) => {
    event.add(tagName, itemIds)
  })
})