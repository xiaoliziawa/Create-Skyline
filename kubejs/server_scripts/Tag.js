ServerEvents.tags("item", (event) => {
  /** @type {[[Special.ItemTag, Special.Item[]]]} */
  let Tags = [["forge:rods", ["kubejs:stone_rod"]]]

  Tags.forEach(([tagName, itemIds]) => {
    event.add(tagName, itemIds)
  })
})



