class Api::SongsController < ApplicationController
  def create
    @song = Song.new(song_params)
    if @song.save
      render :show
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  def index
    @songs = Song.all
  end

  def show
    @song = Song.find_by_id(params[:id])
  end

  def destroy
    @songs = Song.find_by_id(params[:id])
    @songs.delete
    @songs = Song.all
    render :index
  end

  def update
    @song = Song.find_by_id(params[:id])
    if @song.update(song_params)
      render :show
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  private
  def song_params
    params.require(:song).permit(:title, :artist, :user_id, :url, :image_url)
  end
end
