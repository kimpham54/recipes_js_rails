class Recipe{
	constructor(recipeJSON) {
		this.id = recipeJSON.id
		this.user_id = recipeJSON.user_id
		this.title = recipeJSON.title
		this.instructions = recipeJSON.instructions
		this.category = recipeJSON.category
		this.url = recipeJSON.url
		this.image = recipeJSON.image
		this.favourite = recipeJSON.favourite
	}

	renderli(){


		// TODO not DRY, repeating item data load
		if (this.favourite == true){
			return`
				<li data-id=${this.id} class="li-recipe">${this.id}
				<ul>
				<li data-id=${this.id} class="li-title">${this.title}</li>
				<li data-id=${this.id} class="li-instructions">${this.instructions}</li>
				<li data-id=${this.id} class="li-user_id">${this.user_id}</li>
				<li data-id=${this.id} class="li-category">${this.category}</li>
				<li data-id=${this.id} class="li-url"><a href='${this.url}'>${this.url}</a></li>
				<li data-id=${this.id} class="li-image"><img src='${this.image}' /></li>
				</ul>
				</li>
				<button data-id=${this.id} class="deletebtn" type="deletebtn">delete</button>
				<div>
		  		<input type="checkbox"  data-id=${this.id} id="scales" class="checkboxscales" checked>
		  		<label for="Favourite">Favourite</label>
				</div>`}
		else
			{return`
				<li data-id=${this.id} class="li-recipe">${this.id}
				<ul>
				<li data-id=${this.id} class="li-title">${this.title}</li>
				<li data-id=${this.id} class="li-instructions">${this.instructions}</li>
				<li data-id=${this.id} class="li-user_id">${this.user_id}</li>
				<li data-id=${this.id} class="li-category">${this.category}</li>
				<li data-id=${this.id} class="li-url"><a href='${this.url}'>${this.url}</a></li>
				<li data-id=${this.id} class="li-image"><img src='${this.image}' /></li>
				</ul>
				</li>
				<button data-id=${this.id} class="deletebtn" type="deletebtn">delete</button>
				<div>
		  		<input type="checkbox"  data-id=${this.id} id="scales" class="checkboxscales">
		  		<label for="Favourite">Favourite</label>
				</div>`}
	}

		// too complicated with the class changes
		// <!-- Rectangular switch -->
		// <label class="switch">
		//   <input data-id=${this.id} class="switchcheckbox" type="checkbox">
		//   <!-- <input class="switchcheckbox" type="checkbox" checked> -->
		//   <span data-id=${this.id} id="favouriteswitch" class="slider"></span>
		// </label>

	// renderdeletebutton(){
	// 	return `<button class="btn"><i class="fa fa-close"></i></button>`
	// }
}