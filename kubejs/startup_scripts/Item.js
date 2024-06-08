StartupEvents.registry("item", (event) => {
  /**
   *
   * @param {string} id -注册方块ID
   * @param {string} rarity -注册方块稀有度 默认`common`
   * @param {boolean} glow -注册方块是否发光 默认`false`
   *
   */
  function customItemBuilder(id, rarity = 'common', glow = false) {
    event.create(id).rarity(rarity).glow(glow);
  }

  /**
   * @type {string|[string,string?,boolean?]}
   */
  let itemData = [
    ["stone_grain", "common", false], //石子
    // ["stone_rod", "common", false], //石棍
    "stone_rod" // 简化
  ];

  itemData.forEach((data) => {
    if(Array.isArray(data)){
      let [ids, rarity, glow] = data;
      customItemBuilder(ids, rarity, glow);
    }else {
      customItemBuilder(data);
    }
  });
});
