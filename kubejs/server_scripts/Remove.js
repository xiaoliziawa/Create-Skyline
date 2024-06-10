ServerEvents.recipes((event) => {
  /**
   * @type {Array<Special.Item>} 
   */
  const outputRemoved = [
    'minecraft:cobblestone'
  ]
  /**
   * @type {Array<Special.RecipeType>}
   */
  const recipesType = [
    'exnihilosequentia:sieve'
  ]
  /**
   * @type {Array<Special.Mod>}
   */
  const modsRecipe = [
    // none
  ]

  const remove = (removes, removerFunc) => {
    removes.forEach(element => {
      removerFunc(element)
    })
  }

  remove(outputRemoved, Id => event.remove({ output: Id }))
  remove(recipesType, Type => event.remove({ type: Type }))
  remove(modsRecipe, mod => event.remove({ mod: mod }))
})
