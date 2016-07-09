# frozen_string_literal: true
require 'sequel'

module Database
  DB = Sequel.connect(ENV['DATABASE_URL'] || 'postgres://localhost/billingb')
end