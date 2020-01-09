class RecipesAdapter {
	constructor() {
		this.baseUrl = 'http://localhost:3000/api/v1/recipes'
	}


	getRecipes(){

		return fetch(this.baseUrl).then(res => res.json())
	}

	createRecipe(value, value2, value3, value4, value5, value6) {
		const recipe = {
			title: value,
			instructions: value2,
			category: value3,
			url: value4,
			image: value5,
			user_id: value6,
		}

		// const girl = {
		// 		"user_id": 2,
		// 		"recipe_attributes": {
		// 			"title": "GIRL",
		// 			"category": "BOY",
		// 			"url": "LOVE"}
		// }
		// console.log(JSON.stringify({ girl }))

		return fetch(this.baseUrl, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({ recipe })
		})
		.then(res => res.json())
	}


	updateRecipe(value, value3, value4, id){
		const recipe = {
			title: value,
			category: value3,
			url: value4,
		}

		return fetch(`${this.baseUrl}/${id}`, {
			method: 'PATCH',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({ recipe })
		})
		.then(res => res.json())
	}

	deleteRecipe(id){
		const recipe = {
			id: id,
			// title: value,
			// category: value3,
			// url: value4,
		}
		return fetch(`${this.baseUrl}/${id}`, {
			method: 'DELETE',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({ recipe })
		})
		.then(res => res.json())
	}
}