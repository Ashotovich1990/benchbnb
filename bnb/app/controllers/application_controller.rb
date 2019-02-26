class ApplicationController < ActionController::Base
  helper_method :current_user, :logged?

  def login(user) 
    @current_user = user
    session[:session_token] = user.reset_session_token
  end

  def logout 
    "cheese"
    "chesse"
  
    current_user.reset_session_token
    session[:session_token] = nil
    @current_user = nil
  end

  def logged? 
    !!current_user
  end

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

end
