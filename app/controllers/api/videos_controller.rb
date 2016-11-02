class Api::VideosController < ApplicationController
  before_action :require_logged_in, only: [:create,:destroy,:update]

  def show
    @video = Video.find(params[:id])
    render "api/videos/show", status: 200
  end

  def index
    @videos = Video.all
    render "api/videos/show", status: 200
  end

  def create
    @video = Video.new(video_params)
    @video.user_id = current_user.id
    if @video.save
      render "api/videos/show", status: 200
    else
      @errors = @video.errors.full_messages
			render "api/shared/error", status: 422
    end
  end

  def update
    @video = Video.find(params[:id])
    if @video.update(video_params)
      render "api/videos/show", status: 200
    else
      @errors = @video.errors.full_messages
			render "api/shared/error", status: 422
    end
  end

  def destroy
    @favorite = Video.find(params[:id])
    if(@favorite.destroy)
      render "api/videos/show", status: 200
    else
      @errors = favorite.errors.full_messages
			render "api/shared/error", status: 422
    end
  end

  def video_params
    params.require(:video).permit(:title,:description,:url)
  end
end
