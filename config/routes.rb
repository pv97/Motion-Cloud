Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :videos, only: [:create, :index, :show, :destroy, :edit]
  end

  root "static_pages#root"
end
