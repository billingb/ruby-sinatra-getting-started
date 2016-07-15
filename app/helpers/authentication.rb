# frozen_string_literal: true
require File.join(File.dirname(__FILE__), '..', 'entities', 'user')
require File.join(File.dirname(__FILE__), '..', 'repositories', 'user')

module Helpers
  module Authentication
    def protected!()
      params = @params.clone
      if @request.env['HTTP_AUTHORIZATION']
        params[:token] = env['HTTP_AUTHORIZATION']
      end
      return if authorized?(params)
      content_type :json
      halt 401, {error: 'Not authorized'}.to_json
    end

    def user_authorized?(username, password)
      user = Repositories::User.find_user_by_email(username)
      user.authenticate?(password)
    end

    def valid?(params)
      params['email'] && params['password']
    end

    def authorized?(params)
      if(params[:token])
        puts "token auth: #{params[:token]}"
        username, password = params[:token].split('//')
        user_authorized?(username, password)
      else
        puts "pass auth: #{params['email']}, #{params['password']}}"
        user_authorized?(params['email'], params['password'])
      end
    end
  end
end
