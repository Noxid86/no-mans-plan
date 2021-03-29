const fetch = require('node-fetch')

let itemsToMap = [
	"Stasis Device"
]


function fetchInfo(item) {
	let rgx_newlines = /\r?\n|\r/g;
	let rgx_label = /{{Craft\|/g;
	let rgx_blueprint = /(\|blueprint=.*}})/g;
	let rgx_craftingIngrediants = /{{Craft\|.*}}/g;
	let rgx_infoBox = /{{Product infobox \|.* }}/g;

	return fetch(`https://nomanssky.fandom.com/wiki/${item}?action=raw`)
		.then((response) => response.text())
		.then(
			(body) => {
				let craftingPhrase = body.match(rgx_craftingIngrediants)[0]
				let infoBoxPhrase = body.replace(rgx_newlines, ' ').match(rgx_infoBox)[0]
				let infoBoxLines = infoBoxPhrase.split('|')
				let infoBox = {}
				infoBoxLines.forEach(function (item, i) {
					let formattedItem = item.replace(/{{|}}/, '')
					let items = formattedItem.split('=')
					if (items[1]) {
						infoBox[items[0].trim()] = items[1].trim()
					}
				})
				let blueprint = craftingPhrase.match(rgx_blueprint)[0].replace('|blueprint=', '').replace('}}', '');
				ingrediants = craftingPhrase.replace(rgx_label, '').replace(rgx_blueprint, '');
				ingrediants = ingrediants.split(';')
				let parsedIngrediants = [];
				ingrediants.forEach(function (ingr) {
					let chunks = ingr.split(',')
					parsedIngrediants.push({
						name: chunks[0],
						qty: chunks[1]
					})
				})
				let recipe = {
					name: item,
					ingrediants: parsedIngrediants,
					blueprint: blueprint = "yes" ? true : false,
					infoBox: infoBox
				}

				return recipe
			}
		)
}


let mappedItems = []



function mapItems(startingItem){
	return fetchInfo(startingItem)
	.then((recipe)=>{ mappedItems.push(recipe) })
	.then(()=>{
		mappedItems.forEach((item)=>{
			item.ingrediants.forEach((ingrediant)=>{
				  if(!mappedItems.find((item)=>item.name==ingrediant.name)){
					console.log(ingrediant.name, 'is not in mappedItems')
					mapItems(ingrediant.name)
					
				  } else {
					console.log(ingrediant.name, 'is  in mappedItems')
				  }
			})
		})
	})
}
console.log(mappedItems)

mapItems('Stasis Device').then((r)=>console.log(r))

