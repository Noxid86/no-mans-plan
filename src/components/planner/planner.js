import db from './recipe_db.js'

function Planner() {
    console.log(db)
    // FUNCTION: arg- string representing a specific recipe. Returns an array of base ingrediant totals.
    function reduceToBase(recipeString) {
        let reduced
        let ingrediants = []
        let recipe = { ...db.find(recipeString) }
        if (recipe) {
            ingrediants = ingrediants.concat(recipe.ingrediants)
        } else {
            console.log(recipeString, 'not found')
            return
        }

        function reduce() {
            reduced = true;
            ingrediants.forEach(function (ingrediant, index) {
                //  If they are crafted ingrediants... 
                if (ingrediant.type == "crafted") {
                    reduced = false
                    // remove them...
                    ingrediants = ingrediants.filter(item => item.name !== ingrediant.name)
                    // and replace them in the array with their components
                    let newIngrediants = []
                    db.find(ingrediant.name).ingrediants.forEach(function (i) {
                        newIngrediants.push(i)
                    })
                    ingrediants = ingrediants.concat(newIngrediants)

                } else {

                }
            })
            if (!reduced) {
                console.log('reducing')
                reduce()
            } else {
                console.log('reduction complete')
            }
        }
        reduce()

        console.log(ingrediants)
        let totals = []
        ingrediants.forEach(function (i) {
            if (!totals.find(total => total.name == i.name)) {
                let emptyTotal = { ...i }
                emptyTotal.qty = 0
                totals.push(emptyTotal)
            }
        })
        console.log(totals)
        ingrediants.forEach(function (i) {
            totals.forEach(function (tot) {
                if (tot.name == i.name) {
                    tot.qty += i.qty
                }
            })
        })
        console.log('----final total list----')
        console.log(totals)
    }


    //reduceToBase("Fusion Ignitor")

    return (
        <div className="Planner">
            <h1> No Man's Plan </h1>
        </div>
    );
}

export default Planner;
