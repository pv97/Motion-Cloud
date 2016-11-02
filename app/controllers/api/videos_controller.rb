class Api::VideosController < ApplicationController
  def create
    @video = Video.new(video_params)
  end
end
