class Api::SessionsController < ApplicationController
  def create 
    @user = User.find_by_creds(params[:user][:username], params[:user][:password])
    if @user 
      login(@user)
      render 'api/users/show' 
    else 
      render json: @user.errors.full_messages, status: 401 
    end 
  end 

  def destroy 

    if logged?
      logout
      render json: {}
    else
      render json: {message: "No User"}, status: 404
    end
  end 
end

# $.ajax({
#   url: 'api/users',
#  method: "POST",
#  body: {
#    username: "Aram1990",
#    password: "Password"
#  }
#  }).then(res => {console.log(res)})
