Rails.application.routes.draw do
  root 'home#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get "/api/greeting", to: "api_greetings#random"
  # Defines the root path route ("/")
  # root "articles#index"
end
