ServerEvents.recipes(event => {
    event.shaped(
        Item.of('kubejs:vs_helm_wheel', 1),
        [
            'SFS',
            'FGF',
            'SFS'
        ],
        {
            S: 'minecraft:stick',
            F: '#minecraft:wooden_fences',
            G: 'minecraft:gold_block'
        }
    )

    event.shaped(
        Item.of('kubejs:vs_helm_base', 1),
        [
            'FFF',
            'FDF',
            'GIG'
        ],
        {
            F: '#minecraft:wooden_fences',
            D: 'minecraft:diamond',
            G: 'minecraft:gold_ingot',
            I: 'minecraft:iron_block'
        }
    )

    event.shaped(
        Item.of('vs_eureka:oak_ship_helm', 1),
        [
            'W',
            'B'
        ],
        {
            W: 'kubejs:vs_helm_wheel',
            B: 'kubejs:vs_helm_base'
        }
    )

    event.shaped(
        Item.of('kubejs:vs_raw_engine_component', 1),
        [
            'IBI',
            'BFB',
            'IBI'
        ],
        {
            I: 'minecraft:iron_ingot',
            B: 'minecraft:iron_block',
            F: 'minecraft:blast_furnace'
        }
    )

    event.blasting("kubejs:vs_engine_component", "kubejs:vs_raw_engine_component")

    event.shaped(
        Item.of('vs_eureka:engine', 1),
        [
            'BIB',
            'CCC',
            'BBB'
        ],
        {
            I: 'minecraft:iron_bars',
            B: 'minecraft:bricks',
            C: 'kubejs:vs_engine_component'
        }
    )

    event.shaped(
        Item.of('vs_eureka:floater', 1),
        [
            'WWW',
            'WLW',
            'WWW'
        ],
        {
            W: '#minecraft:wool',
            L: '#minecraft:logs'
        }
    )
})