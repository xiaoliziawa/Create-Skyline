StartupEvents.registry("item", (event) => {
  /**
   *
   * @param {string} id -注册方块ID
   * @param {string} rarity -注册方块稀有度
   * @param {boolean} glow -注册方块是否发光
   *
   */
  function customItemBuilder(id, rarity, glow) {
    event.create(id).rarity(rarity).glow(glow);
  }

  let itemData = [
    ["stone_grain", "common", false], //石子
    ["stone_rod", "common", false], //石棍
  ];

  itemData.forEach(([ids, rarity, glow]) => {
    customItemBuilder(ids, rarity, glow);
  });
});
