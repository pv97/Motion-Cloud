class Api::CommentsController < ApplicationController
  before_action :require_logged_in, only: [:create,:destroy,:update]

  def index
    @comments = Comment.where(video_id:params(:video_id),parent_comment_id:-1)
    render "api/comments/index"
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    if @comment.save
      render "api/comments/show"
    else
      render json: @comment.errors, status: 422
    end
  end

  def update
    @comment = Comment.find(params[:id])
    if @comment.update(comment_params)
      render "api/comments/show"
    else
      render json: @comment.errors, status: 422
    end
  end

  def destroy
    @favorite = Comment.find(params[:id])
    if(@favorite.destroy)
      render "api/comments/show"
    else
      render json: @comment.errors, status: 422
    end
  end

  def comment_params
    params.require(:comment).permit(:body,:video_id,:parent_comment_id)
  end
end
