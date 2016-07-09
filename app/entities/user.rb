# frozen_string_literal: true
require 'bcrypt'

module Entities
  class User
    def initialize(record)
      puts "init with #{record}"
      @record = record
    end

    attr_reader :record
    private :record

    # rubocop:disable AbcSize
    def authenticate?(submitted_password)
      if record.nil? || record.empty? || record[:email].empty? || record[:password_digest].empty?
        return false
      end
      password = BCrypt::Password.new(record[:password_digest])
      puts "password_digest: #{record[:password_digest]} "
      password == submitted_password
    end

    def password=(password)
      record[:password_digest] = BCrypt::Password.create(password)
    end
  end
end
