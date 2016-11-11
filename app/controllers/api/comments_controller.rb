class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      @song = @comment.song
      render "api/songs/show"
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find_by_id(params[:id])
    @comment.delete
    @song = @comment.song
    render "api/songs/show"
  end

private
def comment_params
  params.require(:comment).permit(:user_id, :song_id, :body)
end
end
