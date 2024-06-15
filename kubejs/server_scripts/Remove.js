ServerEvents.recipes((event) => {
  /**
   * @type {Array<Special.Item>} 
  */
  const outputRemoved = [
    'minecraft:cobblestone',
    'create:andesite_casing',
    'create:basin',
  ];

  /**
   * @type {Array<Special.RecipeType>}
   */
  const recipesType = [
    'exnihilosequentia:sieve',
  ];

  /**
   * @type {Array<Special.Mod>}
   */
  const modsRecipe = [
    // none
  ];

  /**
   * @type {Array<Special.ItemTag>}
   */
  const tagItemRemove = [
    '#forge:tools',
  ];

  /**
   * @type {Array<Special.RecipeId>}
   */
  const idItemRemove = [
    'tconstruct:tables/crafting_station_from_logs',
  ];

  const remove = (items, removerFunction) => {
    items.forEach(removerFunction);
  };

  remove(outputRemoved, itemId => event.remove({ output: itemId }));
  remove(recipesType, type => event.remove({ type: type }));
  remove(modsRecipe, mod => event.remove({ mod: mod }));
  remove(tagItemRemove, tag => event.remove({ output: tag }));
  remove(idItemRemove, id => event.remove({ id: id }));
});
