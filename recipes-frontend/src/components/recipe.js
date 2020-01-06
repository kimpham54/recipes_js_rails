class Recipe{
	constructor(recipeJSON) {
		this.id = recipeJSON.id
		this.title = recipeJSON.title
		this.instructions = recipeJSON.instructions
		this.category = recipeJSON.category
		this.url = recipeJSON.url
	}

	renderli(){
		return `<li data-id=${this.id}>${this.id}
		<ul>
		<li data-id=${this.id} class="li-title">${this.title}</li>
		<li data-id=${this.id} class="li-category">${this.category}</li>
		<li data-id=${this.id} class="li-url">${this.url}</li>
		</ul>
		</li>
		<button data-id=${this.id} class="deletebtn" type="deletebtn">delete</button>`
	}

	// renderdeletebutton(){
	// 	return `<button class="btn"><i class="fa fa-close"></i></button>`
	// }
}