ServerEvents.recipes((event) => {
  let outputRemoved = ["minecraft:cobblestone"];
  event.remove({ output: outputRemoved });
});
