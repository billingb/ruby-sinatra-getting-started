# frozen_string_literal: true
require File.join(File.dirname(__FILE__), '..', 'entities', 'user')
require File.join(File.dirname(__FILE__), '..', 'repositories', 'user')

module Helpers
  module Authentication
    def protected!(sequel_DB)
      return if authorized?(sequel_DB)
      headers['WWW-Authenticate'] = 'Basic realm="Restricted Area"'
      halt 401, "Not authorized\n"
    end

    def user_authorized?(sequel_DB, credentials)
      username, password = credentials
      user = Repositories::User.find_user_by_email(sequel_DB, username)
      user.authenticate?(password)
    end

    def authorized?(sequel_DB)
      @auth ||=  Rack::Auth::Basic::Request.new(request.env)
      @auth.provided? and @auth.basic? and @auth.credentials and user_authorized?(sequel_DB, @auth.credentials)
    end
  end
end