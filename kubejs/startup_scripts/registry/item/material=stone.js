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