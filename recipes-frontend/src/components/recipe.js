class Recipe{
	constructor(recipeJSON) {
		this.id = recipeJSON.id
		this.title = recipeJSON.title
		this.instructions = recipeJSON.instructions
		this.category = recipeJSON.category
		this.url = recipeJSON.url
	}

	renderli(){
		return `<li data-id=${this.id}>${this.title}</li>`
	}
}