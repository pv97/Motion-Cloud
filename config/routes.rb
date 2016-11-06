Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :comments, only: [:create, :destroy, :edit, :update]
    resources :videos, only: [:create, :index, :show, :destroy, :edit, :update] do
      resources :comments, only: [:index]
    end
  end

  root "static_pages#root"
end
