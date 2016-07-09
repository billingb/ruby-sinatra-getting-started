# frozen_string_literal: true
require File.join(File.dirname(__FILE__), '..', 'entities', 'user')
require File.join(File.dirname(__FILE__), '..', 'database')

module Repositories
  class User
    def self.find_user_by_email(email)
      Entities::User.new(Database::DB[:users].where(email: email).first)
    end
  end
end
