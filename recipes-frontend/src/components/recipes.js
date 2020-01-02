class Recipes{
	constructor(){
		this.recipes = []
		this.adapter = new RecipesAdapter()
		this.initBindingsAndEventListeners()
		this.fetchAndLoadRecipes()

	}

	initBindingsAndEventListeners(){
		this.recipesContainer = document.getElementById('recipes-container')
		this.body = document.querySelector('body')
		this.newRecipeBody = document.getElementById('new-recipe-body')
		this.recipeForm = document.getElementById('new-recipe-form')
		this.recipeForm.addEventListener('submit', this.createRecipe.bind(this))
		this.recipesContainer.addEventListener('dblclick', this.handleRecipeClick.bind(this))
		this.body.addEventListener('blur', this.updateRecipe.bind(this), true)
	}

	createRecipe(e){
		e.preventDefault()
		const value = this.newRecipeBody.value
		this.adapter.createRecipe(value).then(recipe => {
			// console.log(recipe)
			this.recipes.push(new Recipe(recipe))
			this.newRecipeBody.value = ''
			// single page delete form value after submit
			this.render()
		})

		// don't refresh page which is default
		// console.log('recipe is being created')
	}

	handleRecipeClick(e){
		this.toggleRecipe(e)
	}

	toggleRecipe(e){
		const li = e.target
		li.contentEditable = true
		li.focus()
		li.classList.add('editable')

	}

	updateRecipe(e){
		const li = e.target
		li.contentEditable = false
		li.classList.remove('editable')
		const newValue = li.innerHTML
		const id = li.dataset.id
		console.log(id)
		this.adapter.updateRecipe(newValue, id)

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
