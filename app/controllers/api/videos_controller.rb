class Api::VideosController < ApplicationController
  before_action :require_logged_in, only: [:create,:destroy,:update]

  def show
    @video = Video.find(params[:id])
    render "api/videos/show"
  end

  def index
    @videos = Video.all
    render "api/videos/index"
  end

  def fix_thumbnail_size(thumbnail_url)
    #"/video/upload/c_limit,h_60,w_90/v1478141038/fjbplm92cb48efhlqcss.jpg"
    split_url = thumbnail_url.split("/upload/")
    #[ "/video" , "_limit,h_60,w_90/v1478141038/fjbplm92cb48efhlqcss.jpg"]
    split_url2 = split_url[1].split("/")
    #[ "_limit,h_60,w_90", "v1478141038", "fjbplm92cb48efhlqcss.jpg"]
    split_url2.shift
    # ["v1478141038", "fjbplm92cb48efhlqcss.jpg"]
    split_url3 = split_url2.join("/")
    # "v1478141038/fjbplm92cb48efhlqcss.jpg"
    return "#{split_url[0]}/upload/c_limit,w_200/#{split_url3}"
  end

  def create
    @video = Video.new(video_params)
    @video.thumbnail_url = fix_thumbnail_size(@video.thumbnail_url)
    @video.user_id = current_user.id
    if @video.save
      render "api/videos/show"
    else
      render json: @video.errors, status: 422
    end
  end

  def update
    @video = Video.find(params[:id])
    if @video.update(video_params)
      render "api/videos/show"
    else
      render json: @video.errors, status: 422
    end
  end

  def destroy
    @favorite = Video.find(params[:id])
    if(@favorite.destroy)
      render "api/videos/show"
    else
      render json: @video.errors, status: 422
    end
  end

  def video_params
    params.require(:video).permit(:title,:description,:url,:thumbnail_url)
  end
end
