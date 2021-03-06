class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :require_login, :current_user, :signed_in?

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def login(user)
    session[:session_token] = user.session_token
    current_user
  end

  def logout
    current_user.reset_session_token
    session[:session_token] = nil
  end

  def signed_in?
    !!current_user
  end

  def require_login
    redirect_to new_session_url unless signed_in?
  end
end
