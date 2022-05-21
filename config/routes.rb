Rails.application.routes.draw do
  
  resources :clip_packs
  resources :clips
  resources :users, only: [:index,:show, :create]

  delete "/logout", to: "sessions#destroy"
  post "/login", to: "sessions#show"
  post "/users", to: "users#create"
  get "/me", to: "users#show"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
