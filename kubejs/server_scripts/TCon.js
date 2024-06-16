ServerEvents.recipes(event => {
    /**
         * 
         * @param {Special.Item|Special.ItemTag} ItemID ItemsId
         * @param {boolean} consumed true or false
         * @param {number} times number
         * @param {number} needFluidAmount FluidAmount
         * @param {Special.Fluid|Special.FluidTag} fluidId fluidId
         * @param {Special.Item} resultItem resultItems
         * @param {string} type Itemtype: tag or item
         * @param {string} type2 Fluidtype: tag or fluid
         */

    function castingTable(type,ItemID, consumed, times, needFluidAmount,type2, fluidId, resultItem) {
        let castObject = {}
        castObject[type] = ItemID 

        let fluidObject = {
            "amount": needFluidAmount
        }
        fluidObject[type2] = fluidId

        event.custom({
            "type": "tconstruct:casting_table",
            "cast": castObject,
            "cast_consumed": consumed,
            "cooling_time": times,
            "fluid": fluidObject,
            "result": resultItem,
            "switch_slots": true
        })
    }
    
    /**
     * 
     * @param {Special.Item|Special.ItemTag} Input InputItem
     * @param {Boolean} consumed true or false
     * @param {number} times Need times
     * @param {number} needFluidAmount FluidAmount
     * @param {Special.Fluid|Special.FluidTag} fluidId fluidId
     * @param {Special.Item} resultItem resultItems
     * @param {string} type Itemtype: tag or item
     * @param {string} type2 Fluidtype: tag or fluid
     */
    function castingBasin(type, Input, consumed, times, needFluidAmount, type2, fluidId, resultItem) {
        let castObject = {}
        castObject[type] = Input
    
        let fluidObject = {
            "amount": needFluidAmount
        }
        fluidObject[type2] = fluidId
    
        event.custom({
            "type": "tconstruct:retextured_casting_basin",
            "cast": castObject,
            "cast_consumed": consumed,
            "cooling_time": times,
            "fluid": fluidObject,
            "result": resultItem
        })
    }
    
    // 空白沙子模具
    castingTable(
        "item",
        'minecraft:sandstone',
        true,
        60,
        30,
        "fluid",
        'tconstruct:molten_iron',
        'tconstruct:blank_sand_cast',
    )
    // 铁板
    castingTable(
        "item",
        'tconstruct:plate_sand_cast',
        true,
        100,
        50,
        "fluid",
        'tconstruct:molten_iron',
        'create:iron_sheet'
    )
})