ServerEvents.recipes((event) => {
  /**
   * @type {Array<Special.Item>} 
   */
  let outputRemoved = [
    'minecraft:cobblestone'
  ]
  /**
   * @type {Array<Special.RecipeType>}
   */
  let recipesType = [
    'exnihilosequentia:sieve'
  ]
  function outputRemove(Id) {
    event.remove({ output: Id })
  }
  function recipesTypeRemove(Type) {
    event.remove({ type:Type})
  }
  outputRemoved.forEach(Id => {
    outputRemove(Id)
  })
  recipesType.forEach(Type => {
    recipesTypeRemove(Type)
  })
})