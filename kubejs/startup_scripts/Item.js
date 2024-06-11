
/**
 * @param {string} id - 注册方块ID
 * @param {string} [rarity="common"] - 注册方块稀有度 默认 `common`
 * @param {boolean} [glow=false] - 注册方块是否发光 默认 `false`
 */
function customItemBuilder(id, rarity='common', glow=false) {
  StartupEvents.registry("item", (event) => {
    event.create(id).rarity(rarity).glow(glow)
  })
}

/**
 * @type {Array<string|[string, string?, boolean?]>}
 */
let itemData = [
  ["stone_grain", "common", false],
  ["stone_rod", "common", false]
]

itemData.forEach(([ID,Rarity,Glow]) => {
  customItemBuilder(ID,Rarity,Glow)
})
