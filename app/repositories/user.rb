# frozen_string_literal: true
require File.join(File.dirname(__FILE__), '..', 'entities', 'user')

module Repositories
  class User
    def self.find_user_by_email(sequel_DB, email)
      Entities::User.new(sequel_DB[:users].where(email: email).first)
    end
  end
end
