ServerEvents.recipes((event) => {
  event.shaped(Item.of("minecraft:cobweb", 1), [" S ", "SSS", " S "], {
    S: "minecraft:string",
  });

  event.shaped(
    Item.of("walkietalkie:diamond_walkietalkie", 1),
    ["CD", "RI", "II"],
    {
      C: "minecraft:lightning_rod",
      D: "minecraft:diamond_block",
      R: "minecraft:redstone_block",
      I: "minecraft:iron_block",
    },
  );

  event.shaped(
    Item.of("walkietalkie:iron_walkietalkie", 1),
    ["CG", "RI", "II"],
    {
      C: "minecraft:lightning_rod",
      G: "minecraft:gold_block",
      R: "minecraft:redstone",
      I: "minecraft:iron_block",
    },
  );
});

