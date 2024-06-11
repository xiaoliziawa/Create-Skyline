ServerEvents.recipes((event) => {
  /**
   * @type {Array<Special.Item>} 
  */
  // 物品ID移除配方
  const outputRemoved = [
    'minecraft:cobblestone',
    'tconstruct:tables/crafting_station_from_logs',
  ]
  /**
   * @type {Array<Special.RecipeType>}
   */
  // 合成类型移除配方
  const recipesType = [
    'exnihilosequentia:sieve'
  ]
  /**
   * @type {Array<Special.Mod>}
   */
  // 模组移除配方
  const modsRecipe = [
    // none
  ]
  /**
   * @type {Array<Special.ItemTag>}
   */
  // 物品tag移除配方
  const tagItemRemove = [
    '#forge:tools'
  ]

  const remove = (removes, removerFunc) => {
    removes.forEach(element => {
      removerFunc(element)
    })
  }

  remove(outputRemoved, Id => event.remove({ output: Id }))
  remove(recipesType, Type => event.remove({ type: Type }))
  remove(modsRecipe, mod => event.remove({ mod: mod }))
  remove(tagItemRemove,Tag => event.remove({output:Tag}))
})
