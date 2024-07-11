ServerEvents.loaded(event => {

    let recipeJson = {
        type: "minecraft:crafting_shaped",
        pattern: [
            'D  ',
            ' D ',
            '  P'
        ],
        key: {
            D: {
                item: "minecraft:diamond"
            },
            S: {
                item: "minecraft:stick"
            }
        },
        result: {
            item: "minecraft:diamond_sword",
            count: 1
        }
    }

    let jsonContent = JSON.stringify(recipeJson, null, 2)

    let filePath = 'kubejs/exported_recipes/diamond_sword_recipe.json'

    // 写入 JSON 文件
    JsonIO.write(filePath, JSON.parse(jsonContent))
})
