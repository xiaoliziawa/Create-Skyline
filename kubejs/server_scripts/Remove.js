ServerEvents.recipes((event) => {
  let outputRemoved = [
      "minecraft:cobblestone"
    ]
  outputRemoved.forEach(id => {
    event.remove({output:id})
  })
})