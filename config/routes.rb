Rails.application.routes.draw do
  resources :message_threads
  resources :exercises
  resources :workouts, except: [:update]
  resources :trainers
  resources :meals
  resources :days
  resources :trainees
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
post '/login_trainee', to: 'sessions#login_trainee'

post '/login_trainer', to: 'sessions#login_trainer'

get '/authorized_user', to: 'sessions#get_current_trainee_or_trainer'

delete '/logout', to: 'sessions#logout'
  # Defines the root path route ('/')
  # root 'articles#index'
end
