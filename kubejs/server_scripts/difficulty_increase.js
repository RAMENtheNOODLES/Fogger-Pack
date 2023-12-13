ServerEvents.recipes(event => {
    event.remove( { output: "vs_eureka:balloon" } )
    event.remove( { input: "vs_eureka:balloon" } )
    event.remove( { output: "vs_eureka:balloon", input: "supplementaries:soap" } )
    event.remove( { input: "supplementaries:soap" } )
    event.remove( { output: "supplementaries:soap" } )
    event.remove([
        { output: "vs_eureka:balloon" },
        { output: "vs_eureka:white_balloon" },
        { output: "vs_eureka:light_gray_balloon" },
        { output: "vs_eureka:gray_balloon" },
        { output: "vs_eureka:black_balloon" },
        { output: "vs_eureka:red_balloon" },
        { output: "vs_eureka:orange_balloon" },
        { output: "vs_eureka:yellow_balloon" },
        { output: "vs_eureka:lime_balloon" },
        { output: "vs_eureka:green_balloon" },
        { output: "vs_eureka:light_blue_balloon" },
        { output: "vs_eureka:cyan_balloon" },
        { output: "vs_eureka:blue_balloon" },
        { output: "vs_eureka:purple_balloon" },
        { output: "vs_eureka:magenta_balloon" },
        { output: "vs_eureka:pink_balloon" },
        { output: "vs_eureka:brown_balloon" }
    ])

    event.remove([
        { output: "vs_eureka:ship_helms" },
        { output: "vs_eureka:oak_ship_helm" },
        { output: "vs_eureka:spruce_ship_helm" },
        { output: "vs_eureka:birch_ship_helm" },
        { output: "vs_eureka:jungle_ship_helm" },
        { output: "vs_eureka:acacia_ship_helm" },
        { output: "vs_eureka:dark_oak_ship_helm" },
        { output: "vs_eureka:crimson_ship_helm" },
        { output: "vs_eureka:warped_ship_helm" }
    ])

    event.remove({ id: "supplementaries:soap_clean_vs_eureka_balloon" })
    event.remove({ output: "vs_eureka:engine" })
    event.remove({ output: 'vs_eureka:floater' })
    event.remove({ output: '#vs_eureka:ship_helms' })

    event.remove({ output: 'walkietalkie:wooden_walkietalkie'})
    event.remove({ output: 'walkietalkie:stone_walkietalkie'})
    event.remove({ output: 'walkietalkie:iron_walkietalkie'})
    event.remove({ output: 'walkietalkie:diamond_walkietalkie'})
    
    event.remove({ output: "minecraft:shield" })

    console.log('Hello! The recipe event has fired!')
})
