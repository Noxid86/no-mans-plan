let db = {
    find: function (query) {
        let result = recipes.find(element => element.name == query);
        if (!result) { console.log('could not find recipe for', query) }
        return result;
    },
    validateRecipes: function() {
        let report = {
            base_ingrediants: [],
            crafted_ingrediants: [],
            unregistered_ingrediants: [],
            recursive: [],
            unTyped: [],
        }
        recipes.forEach(function (r) {
    
            r.ingrediants.forEach(function (i) {
                if (!recipes.find(recipe => recipe.name == i.name)) {
                    if (i.qty == 1) {
                        report.unregistered_ingrediants.push(i.name)
                    }
                }
                if (r.name == i.name) {
                    report.recursive.push(i.name)
                }
                if (!i.type) {
                    report.unTyped.push(i.name)
                }
            })
        })
        return report
    },
    addRecipe: function(newRecipe){
        
    }
}


export default db

let recipes = [
    {
        name: "Fusion Ignitor",
        ingrediants: [
            { name: "Geodesite", type: "crafted", qty: 1 },
            { name: "Quantum Processor", type: "crafted", qty: 1 },
            { name: "Portable Reactor", type: "crafted", qty: 1 },
        ],
    },
    {
        name: "Geodesite",
        ingrediants: [
            { name: "Dirty Bronze", type: "crafted", qty: 1 },
            { name: "Lemmium", type: "crafted", qty: 1 },
            { name: "Herox", type: "crafted", qty: 1 },
        ],
    },
    {
        name: "Dirty Bronze",
        ingrediants: [
            { name: "Pyrite", type: "base", qty: 50 },
            { name: "Pure Ferrite", type: "base", qty: 50 },
        ]
    },
    {
        name: "Quantum Processor",
        ingrediants: [
            { name: "Circuit Board", type: "crafted", qty: 1 },
            { name: "Superconductor", type: "crafted", qty: 1 },
        ],
    },
    {
        name: "Portable Reactor",
        ingrediants: [
            { name: "Liquid Explosive", type: "crafted", qty: 1 },
            { name: "Fusion Accelerant", type: "crafted", qty: 1 },
        ],
    },
    {
        name: "Fusion Accelerant",
        ingrediants: [
            { name: "Organic Catalyst", type: "crafted", qty: 1 },
            { name: "Nitrogen Salt", type: "crafted", qty: 1 },
        ],
    },
    {
        name: "Liquid Explosive",
        ingrediants: [
            { name: "Acid", type: "crafted", qty: 1 },
            { name: "Unstable Gel", type: "crafted", qty: 1 },
        ],
    },
    {
        name: "Acid",
        ingrediants: [
            { name: "Mordite", type: "base", qty: 25 },
            { name: "Fungal Mold", type: "base", qty: 600 },
        ],
    },
    {
        name: "Unstable Gel",
        ingrediants: [
            { name: "Cactus Flesh", type: "base", qty: 200 },
        ],
    },
    {
        name: "Heat Capacitor",
        ingrediants: [
            { name: "Frost Crystal", type: "base", qty: 100 },
            { name: "Solanium", type: "base", qty: 200 },
        ],
    },
    {
        name: "Poly Fibre",
        ingrediants: [
            { name: "Cactus Flesh", type: "base", qty: 100 },
            { name: "Star Bulb", type: "base", qty: 200 },
        ],
    },
    {
        name: "Circuit Board",
        ingrediants: [
            { name: "Heat Capacitor", type: "crafted", qty: 1 },
            { name: "Poly Fibre", type: "crafted", qty: 1 },
        ],
    },
    {
        name: "Superconductor",
        ingrediants: [
            { name: "Enriched Carbon", type: "crafted", qty: 1 },
            { name: "Semiconductor", type: "crafted", qty: 1 },
        ],
    },
    {
        name: "Semiconductor",
        ingrediants: [
            { name: "Thermic Condensate", type: "crafted", qty: 1 },
            { name: "Nitrogen Salt", type: "crafted", qty: 1 },
        ],
    },
    {
        name: "Enriched Carbon",
        ingrediants: [
            { name: "Radon", type: "base", qty: 250 },
            { name: "Condensed Carbon", type: "base", qty: 50 },
        ],
    },
    {
        name: "Organic Catalyst",
        ingrediants: [
            { name: "Thermic Condensate", type: "crafted", qty: 1 },
            { name: "Enriched Carbon", type: "crafted", qty: 1 },
        ],
    },
    {
        name: "Nitrogen Salt",
        ingrediants: [
            { name: "Nitrogen", type: "base", qty: 250 },
            { name: "Condensed Carbon", type: "base", qty: 50 },
        ],
    },
    {
        name: "Thermic Condensate",
        ingrediants: [
            { name: "Sulphurine", type: "base", qty: 250 },
            { name: "Condensed Carbon", type: "base", qty: 50 },
        ]
    },
    {
        name: "Lemmium",
        ingrediants: [
            { name: "Uranium", type: "base", qty: 50 },
            { name: "Pure Ferrite", type: "base", qty: 100 },
        ]
    },
    {
        name: "Herox",
        ingrediants: [
            { name: "Ammonia", type: "base", qty: 50 },
            { name: "Ionised Cobalt", type: "base", qty: 50 },
        ]
    },
]



