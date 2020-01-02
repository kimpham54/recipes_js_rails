class RecipesAdapter {
	constructor() {
		this.baseUrl = 'http://localhost:3000/api/v1/recipes'
	}


	getRecipes(){

		return fetch(this.baseUrl).then(res => res.json())
	}

	createRecipe(value) {
		const recipe = {
			title: value,
			instructions: value,
			category: value,
			url: value,
		}

		return fetch(this.baseUrl, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({ recipe })
		})
		.then(res => res.json())
	}


	updateRecipe(value, id){
		const recipe = {
			title: value,
			instructions: value,
			category: value,
			url: value,
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
}