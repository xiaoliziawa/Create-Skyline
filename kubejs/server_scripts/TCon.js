ServerEvents.recipes(event => {
    /**
     * @param {Object} options - The options for casting
     * @param {string} options.type - Itemtype: 'tag' or 'item'
     * @param {Special.Item|Special.ItemTag} options.itemId - ItemsId
     * @param {boolean} options.consumed - true or false
     * @param {number} options.coolingTime - number
     * @param {number} options.fluidAmount - FluidAmount
     * @param {string} options.fluidType - Fluidtype: 'tag' or 'fluid'
     * @param {Special.Fluid|Special.FluidTag} options.fluidId - fluidId
     * @param {Special.Item} options.resultItem - resultItems
     * @param {string} options.castingType - 'table' or 'basin'
     */
    function casting(options) {
        const { type, itemId, consumed, coolingTime, fluidAmount, fluidType, fluidId, resultItem, castingType } = options

        const castObject = { [type]: itemId }
        const fluidObject = { amount: fluidAmount, [fluidType]: fluidId }

        event.custom({
            type: `tconstruct:${castingType === 'basin' ? 'retextured_casting_basin' : 'casting_table'}`,
            cast: castObject,
            cast_consumed: consumed,
            cooling_time: coolingTime,
            fluid: fluidObject,
            result: resultItem,
            ...(castingType === 'table' && { switch_slots: true })
        })
    }

    // 空白沙子模具
    casting({
        type: 'item',
        itemId: 'minecraft:sandstone',
        consumed: true,
        coolingTime: 60,
        fluidAmount: 30,
        fluidType: 'fluid',
        fluidId: 'tconstruct:molten_iron',
        resultItem: 'tconstruct:blank_sand_cast',
        castingType: 'table'
    })

    // 铁板
    casting({
        type: 'item',
        itemId: 'tconstruct:plate_sand_cast',
        consumed: true,
        coolingTime: 100,
        fluidAmount: 50,
        fluidType: 'fluid',
        fluidId: 'tconstruct:molten_iron',
        resultItem: 'create:iron_sheet',
        castingType: 'table'
    })

    // 安山合金
    casting({
        type: 'item',
        itemId: 'tconstruct:ingot_cast',
        consumed: false,
        coolingTime: 40,
        fluidAmount: 50,
        fluidType: 'fluid',
        fluidId: 'kubejs:andesite_fluid',
        resultItem: 'create:andesite_alloy',
        castingType: 'table'
    })

})