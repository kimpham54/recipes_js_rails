class Recipe {
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

	renderli() {


		// TODO not DRY, repeating item data load, somehow remove checkbox and add conditional on that only
		if (this.favourite == true) {
			return `
				
			<div class="accordion" id="accordionExample">
			<div class="accordion-item">
			  <h2 class="accordion-header" id="headingOne">
				<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
				  aria-expanded="true" aria-controls="collapseOne">
				  ${this.title}
				</button>
			  </h2>
			  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
				data-bs-parent="#accordionExample">
				<div class="accordion-body">
	









				  <ul>
				  <h3 data-id=${this.id} class="li-title">${this.title}</h3>
				  <li data-id=${this.id} class="li-instructions">${this.instructions}</li>
				  <li data-id=${this.id} class="li-user_id">User: ${this.user_id}</li>
				  <li data-id=${this.id} class="li-category">Category: ${this.category}</li>
				  <li data-id=${this.id} class="li-url">Link: <a href='${this.url}'>${this.url}</a></li>
				  <li data-id=${this.id} class="li-image"><img src='${this.image}' /></li>
				  </ul>
				  </li>
				  <button data-id=${this.id} class="deletebtn" type="deletebtn">delete</button>
				  <div>
					<input type="checkbox"  data-id=${this.id} id="scales" class="checkboxscales" checked>
					<label for="Favourite">Favourite</label>







	  
	  
	  
				</div>
			  </div>
			</div>
		  </div>
	  
			
			
				</div>`}
		else {
			return `
				
			<div class="accordion" id="accordionExample">
			<div class="accordion-item">
			  <h2 class="accordion-header" id="headingOne">
				<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
				  aria-expanded="true" aria-controls="collapseOne">
				  ${this.title}
				</button>
			  </h2>
			  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
				data-bs-parent="#accordionExample">
				<div class="accordion-body">
	







			<li data-id=${this.id} class="li-instructions">${this.instructions}</li>
			<li data-id=${this.id} class="li-user_id">User: ${this.user_id}</li>
			<li data-id=${this.id} class="li-category">Category: ${this.category}</li>
			<li data-id=${this.id} class="li-url"><a href='Link: ${this.url}'>${this.url}</a></li>
			<li data-id=${this.id} class="li-image"><img src='${this.image}' /></li>
			</ul>
			</li>
			<button data-id=${this.id} class="deletebtn" type="deletebtn">delete</button>
			<div>
			  <input type="checkbox"  data-id=${this.id} id="scales" class="checkboxscales">
			  <label for="Favourite">Favourite</label>







	  
	  
	  
				</div>
			  </div>
			</div>
		  </div>



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