class Recipe{
	constructor(recipeJSON) {
		this.id = recipeJSON.id
		this.title = recipeJSON.title
	}

	renderli(){
		return `<li data-id=${this.id}>${this.title}</li>`
	}
}