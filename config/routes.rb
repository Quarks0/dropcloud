Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index, :update]
    resource :sessions, only: [:create, :destroy, :show]
    resources :songs, only: [:create, :destroy, :show, :index, :update]
  end

  root "static_pages#root"
end
