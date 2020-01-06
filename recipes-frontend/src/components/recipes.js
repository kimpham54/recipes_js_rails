class Recipes{
	constructor(){
		this.recipes = []
		this.adapter = new RecipesAdapter()
		this.initBindingsAndEventListeners()
		this.fetchAndLoadRecipes()

	}

	initBindingsAndEventListeners(){
		// this.delbtn = document.getElementsByClassName('deletebtn')
		this.recipesContainer = document.getElementById('recipes-container')
		this.body = document.querySelector('body')
		this.newRecipeBody = document.getElementById('new-recipe-body')
		this.newRecipeInstructions = document.getElementById('new-recipe-instructions')
		this.newRecipeCategory = document.getElementById('new-recipe-category')
		this.newRecipeUrl = document.getElementById('new-recipe-url')
		// this.lititle = document.getElementsByClassName('li-title')
		// this.licategory = document.getElementsByClassName('li-category')
		// this.liurl = document.getElementsByClassName('li-url')

		this.recipeForm = document.getElementById('new-recipe-form')
		this.recipeForm.addEventListener('submit', this.createRecipe.bind(this))
		this.recipesContainer.addEventListener('dblclick', this.handleRecipeDoubleClick.bind(this))
		this.recipesContainer.addEventListener('blur', this.updateRecipe.bind(this), true)
		// this.recipesContainer.addEventListener('click', function(){console.log("hello")})
		this.recipesContainer.addEventListener('click', this.handleRecipeSingleClick.bind(this))
		// updateRecipe previously used body
	}

	createRecipe(e){
		e.preventDefault()
		const value = this.newRecipeBody.value
		const value2 = this.newRecipeInstructions.value
		const value3 = this.newRecipeCategory.value
		const value4 = this.newRecipeUrl.value
		this.adapter.createRecipe(value, value2, value3, value4).then(recipe => {
			this.recipes.push(new Recipe(recipe))
			this.newRecipeBody.value = ''
			this.newRecipeInstructions.value = ''
			// single page delete form value after submit
			console.log(recipe)
			this.render()
		})

		// don't refresh page which is default
		// console.log('recipe is being created')
	}

	handleRecipeDoubleClick(e){
		this.toggleRecipe(e)
		console.log(e.target.tagName)
	}

	handleRecipeSingleClick(e){
		console.log(e.target.className)
		// className, tagName, id
		if (e.target.className == 'deletebtn'){
			this.deleteRecipe(e)
		}
	}

	toggleRecipe(e){
		const li = e.target
		li.contentEditable = true
		li.focus()
		li.classList.add('editable')

	}

	updateRecipe(e){
		console.log("e.target is " + e.target.className)
		const li = e.target
		li.contentEditable = false
		li.classList.remove('editable')
		// const newValue = li.innerHTML
		const id = li.dataset.id
		console.log(e.target)

		// if (e.target.className == 'li-title'){
		// 	var vartitle = e.target.innerHTML
		// 	console.log("the title is" + vartitle)
		// }

		// if (e.target.className == 'li-category'){
		// 	var varcategory = e.target.innerHTML
		// }

		// if (e.target.className == 'li-url'){
		// 	var varurl = e.target.innerHTML
		// }		

		// let title = this.lititle[id-1].innerHTML
		let title = document.querySelector(`li[data-id='${CSS.escape(id)}'].li-title`).innerHTML
		let category = document.querySelector(`li[data-id='${CSS.escape(id)}'].li-category`).innerHTML
		let url = document.querySelector(`li[data-id='${CSS.escape(id)}'].li-url`).innerHTML
		
		console.log("title is " + title)
		console.log("category is " + category)
		console.log("url is " + url)
		// let url = this.liurl[id-1].innerHTML

		// console.log("innerhtml omg is" + document.querySelector(`li[data-id='${CSS.escape(id)}'].li-category`).innerHTML)
		// console.log("innerhtml is" + document.querySelector("li[data-id='2'].li-category").innerHTML)
		console.log("e.target id is " + id)
		// console.log("li title dataset id " + this.lititle.innerHTML)
		console.log("e.target classname" + e.target.className)
		// let title = this.lititle[id-1].innerHTML
		// let category = this.licategory[id-1].innerHTML
		// let url = this.liurl[id-1].innerHTML
		// const category = li.attr('category')
		// const url = li.attr('url')
		console.log("li.dataset.id is " + id)
		// console.log("li title is " + vartitle)
		// console.log("li cat is " + varcategory)
		// console.log("li url is " + varurl)
		// this.adapter.updateRecipe(newValue, id)
		this.adapter.updateRecipe(title, category, url, id)
		// better if updated just one field only, rest or spread or optional arguments?
		

	}

	deleteRecipe(e){
		console.log(e.target)
		const btn = e.target
		console.log("btn is"+ btn)
		const id = btn.dataset.id
		console.log("id button is " + id)
		// let title = this.lititle[id-1]
		// let category = this.licategory[id-1]
		// let url = this.liurl[id-1]
		// remove innerHTML unlike updateRecipe
		this.adapter.deleteRecipe(id)

	}

	fetchAndLoadRecipes(){
		this.adapter
		.getRecipes()
		.then(recipes => {
			// return console.log(recipes)
			// recipes.forEach(recipe => this.recipes.push(recipe))
			recipes.sort((a,b)=>a.id - b.id).forEach(recipe => this.recipes.push(new Recipe(recipe)))
			console.log(this.recipes)

		})
		.then(()=>{
			this.render()
		})
	}

	render(){
		// console.log('rendering...')
		// const recipesStuff = this.recipes.map(recipe => `<li>${recipe.body}</li>`).join('')
		// console.log(recipesStuff)
		// const recipesContainer = document.getElementById('recipes-container')
		// recipesContainer.innerHTML = 'my recipes here'
		// console.log('my recipes are', this.recipes)
		this.recipesContainer.innerHTML = this.recipes.map(recipe => recipe.renderli()).join('')
		
	}
}
