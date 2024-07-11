ServerEvents.recipes(event => {

    let recipePattern = [
        'D  ',
        ' D ',
        '  S'
    ];

    let jsonContent = JSON.stringify({
        pattern: recipePattern
    }, null, 2);

    let filePath = 'kubejs/exported_recipes/diamond_sword_pattern.json';
    
    // 写入JSON文件
    JsonIO.write(filePath, JSON.parse(jsonContent));

})