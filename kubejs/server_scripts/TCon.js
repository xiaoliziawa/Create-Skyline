ServerEvents.recipes(event => {
    /**
         * 
         * @param {Special.Item|Special.ItemTag} ItemID ItemsId
         * @param {boolean} Consumed true or false
         * @param {number} Times number
         * @param {number} NeedFluidAmount FluidAmount
         * @param {Special.Fluid|Special.FluidTag} FluidId FluidId
         * @param {Special.Item} ResultItem ResultItems
         * @param {string} Type ItemType: tag or item
         * @param {string} Type2 FluidType: tag or fluid
         */

    function castingTable(Type,ItemID, Consumed, Times, NeedFluidAmount,Type2, FluidId, ResultItem) {
        let castObject = {}

        castObject[Type] = ItemID 

        let fluidObject = {
            "amount": NeedFluidAmount
        }

        fluidObject[Type2] = FluidId

        event.custom({
            "type": "tconstruct:casting_table",
            "cast": castObject,
            "cast_consumed": Consumed,
            "cooling_time": Times,
            "fluid": fluidObject,
            "result": ResultItem,
            "switch_slots": true
        })
    }
    
    /**
     * 
     * @param {Special.Item|Special.ItemTag} Input InputItem
     * @param {Boolean} Consumed true or false
     * @param {number} Times Need Times
     * @param {number} NeedFluidAmount FluidAmount
     * @param {Special.Fluid|Special.FluidTag} FluidId FluidId
     * @param {Special.Item} ResultItem ResultItems
     * @param {string} Type ItemType: tag or item
     * @param {string} Type2 FluidType: tag or fluid
     */
    function castingBasin(Type, Input, Consumed, Times, NeedFluidAmount, Type2, FluidId, ResultItem) {
        let castObject = {}

        castObject[Type] = Input
    
        let fluidObject = {
            "amount": NeedFluidAmount
        }

        fluidObject[Type2] = FluidId
    
        event.custom({
            "type": "tconstruct:retextured_casting_basin",
            "cast": castObject,
            "cast_consumed": Consumed,
            "cooling_time": Times,
            "fluid": fluidObject,
            "result": ResultItem
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