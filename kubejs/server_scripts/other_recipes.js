ServerEvents.recipes(event => {
    event.shaped(
        Item.of('minecraft:cobweb', 1),
        [
            ' S ',
            'SSS',
            ' S '
        ],
        {
            S: 'minecraft:string'
        }
    )
})