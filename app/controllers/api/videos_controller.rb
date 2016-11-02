class Api::VideosController < ApplicationController
  before_action :require_logged_in, only: [:create,:destroy]


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

  def destroy
    if (current_user.nil?)
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
