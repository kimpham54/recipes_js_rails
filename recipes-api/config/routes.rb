Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
  	namespace :v1 do
  		resources :recipes
  		resources :users

  		resources :users, only: [:show] do
      		resources :recipes, only: [:new, :show, :index, :edit, :destroy, :update]
    	end

    	
  	end
  end
end
