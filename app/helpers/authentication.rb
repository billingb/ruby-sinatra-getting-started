# frozen_string_literal: true
require File.join(File.dirname(__FILE__), '..', 'entities', 'user')
require File.join(File.dirname(__FILE__), '..', 'repositories', 'user')

module Helpers
  module Authentication
    def protected!(params)
      return if authorized?(params)
      halt 401, "Not authorized\n"
    end

    def user_authorized?(username, password)
      user = Repositories::User.find_user_by_email(username)
      user.authenticate?(password)
    end

    def valid?(params)
      params['email'] && params['password']
    end

    def authorized?(params)
      if(params['token'])
        puts "token auth: #{params['token']}"
        username, password = params['token'].split('//')
        user_authorized?(username, password)
      else
        puts "pass auth: #{params['email']}, #{params['password']}}"
        user_authorized?(params['email'], params['password'])
      end
    end
  end
end
