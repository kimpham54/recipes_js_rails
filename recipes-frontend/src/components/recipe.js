class Recipe{
	constructor(recipeJSON) {
		this.id = recipeJSON.id
		this.user_id = recipeJSON.user_id
		this.title = recipeJSON.title
		this.instructions = recipeJSON.instructions
		this.category = recipeJSON.category
		this.url = recipeJSON.url
		this.image = recipeJSON.image
	}

	renderli(){
		return `<li data-id=${this.id} class="li-recipe">${this.id}
		<ul>
		<li data-id=${this.id} class="li-title">${this.title}</li>
		<li data-id=${this.id} class="li-instructions">${this.instructions}</li>
		<li data-id=${this.id} class="li-user_id">${this.user_id}</li>
		<li data-id=${this.id} class="li-category">${this.category}</li>
		<li data-id=${this.id} class="li-url"><a href='${this.url}'>${this.url}</a></li>
		<li data-id=${this.id} class="li-image"><img src='${this.image}' /></li>
		</ul>
		</li>
		<button data-id=${this.id} class="deletebtn" type="deletebtn">delete</button>`
	}

	// renderdeletebutton(){
	// 	return `<button class="btn"><i class="fa fa-close"></i></button>`
	// }
}