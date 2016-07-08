# frozen_string_literal: true

require 'sinatra'
require 'json'

class App < Sinatra::Base
  require 'sequel'
  DB = Sequel.connect(ENV['DATABASE_URL'] || 'postgres://localhost/billingb')

  get '/hello' do
    content_type :json
    { message: 'Hello, world' }.to_json
  end

  get '/messages' do
    content_type :json
    DB[:messages].to_a.to_json
  end
end
