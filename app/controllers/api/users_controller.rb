class Api::UsersController < ApplicationController

	def create
		@user = User.new(user_params)
    @user.username = user_params[:username].capitalize
    @user.email = user_params[:email].capitalize
		if @user.save
			login(@user)
			render "api/users/show"
		else
			render json: @user.errors.full_messages, status: 422
		end
	end

	private

	def user_params
		params.require(:user).permit(:username, :password, :email)
	end

end
