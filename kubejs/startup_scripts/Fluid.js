StartupEvents.registry('fluid', event => {
    /**
     * 
     * @param {string} fluidId customFluidIds
     * @param {number} fluidColor fluidColor
     */
    function customFluid(fluidId,fluidColor) {
        event.create(fluidId)
            .thinTexture(fluidColor)
            .bucketColor(fluidColor)
    }

    customFluid('andesite_fluid',0xD3D3D3)
})