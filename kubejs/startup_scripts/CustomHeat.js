CreateHeatJS.registerHeatEvent((event) => {
    /**
     * 
     * @param {string} heatName levelName
     * @param {number} heatLevel heatLevel
     * @param {number} heatColor nameColor
     * @param {Special.Block} blockId Need Change Block Ids
     */
    function customHeat(heatName, heatLevel, heatColor, blockId) {
        event.registerHeatLevel(heatName, heatLevel, heatColor)
        event.registerHeatSource(heatName,blockId)
    }

    customHeat('Fire', 3, 0xed9c33, 'minecraft:fire')
})