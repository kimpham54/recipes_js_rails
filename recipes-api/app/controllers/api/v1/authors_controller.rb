class Api::V1::AuthorsController < ApplicationController
	def index
		# get list of authors
		@authors = Author.all
		render json: @authors, status: 200
	end

	def show
		@author = Author.find(params[:id])

		render json: @author, status: 200
	end

	def create
		@author = Author.create(author_params)
		render json: @author, status:200
	end

	def update
		@author = Author.find(params[:id])
		@author.update(author_params)
		render json: @author, status: 200
	end

	def destroy
		@author = Author.find(params[:id])
		@author.delete
		render json: {authorId: @author.id}
	end

	private
	def author_params
		params.require(:author).permit(:body)
	end

end
