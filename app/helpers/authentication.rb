# frozen_string_literal: true
require File.join(File.dirname(__FILE__), '..', 'entities', 'user')
require File.join(File.dirname(__FILE__), '..', 'repositories', 'user')

module Helpers
  module Authentication
    def protected!
      return if authorized?
      headers['WWW-Authenticate'] = 'Basic realm="Restricted Area"'
      halt 401, "Not authorized\n"
    end

    def user_authorized?(credentials)
      username, password = credentials
      user = Repositories::User.find_user_by_email(username)
      user.authenticate?(password)
    end

    def authorized?
      @auth ||= Rack::Auth::Basic::Request.new(request.env)
      @auth.provided? && @auth.basic? && @auth.credentials && user_authorized?(@auth.credentials)
    end
  end
end
