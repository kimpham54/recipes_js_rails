class Api::V1::RecipesController < ApplicationController
	
	def index
		# get list of recipes
		@recipes = Recipe.all
		render json: @recipes, status: 200
	end

	def show
		@recipe = Recipe.find(params[:id])

		render json: @recipe, status: 200
	end

	def create
		@recipe = Recipe.create(recipe_params)
		render json: @recipe, status:200
	end

	def update
		@recipe = Recipe.find(params[:id])
		@recipe.update(recipe_params)
		render json: @recipe, status: 200
	end

	def destroy
		@recipe = Recipe.find(params[:id])
		@recipe.delete
		render json: {recipeId: @recipe.id}
	end

	private
	def recipe_params
		params.require(:recipe).permit(:user_id, :title, :instructions, :category, :url)
	end

end

