# frozen_string_literal: true
require File.join(File.dirname(__FILE__), '..', 'entities', 'user')
require File.join(File.dirname(__FILE__), '..', 'repositories', 'user')

module Helpers
  module Authentication
    def self.user_authorized?(username, password)
      user = Repositories::User.find_user_by_email(username)
      user.authenticate?(password) ? user : nil
    end

    def self.password_valid?(params)
      puts "params: #{params}"
      params['username'] && params['password']
    end

    def self.password_authenticate!(params)
      user_authorized?(params['username'], params['password'])
    end
  end
end
