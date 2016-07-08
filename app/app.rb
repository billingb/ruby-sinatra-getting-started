# frozen_string_literal: true

require 'sinatra'
require 'json'
require 'sequel'
require File.join(File.dirname(__FILE__), 'helpers', 'authentication')

class App < Sinatra::Base
  DB = Sequel.connect(ENV['DATABASE_URL'] || 'postgres://localhost/billingb')
  helpers Helpers::Authentication

  get '/hello' do
    content_type :json
    { message: 'Hello, world' }.to_json
  end

  get '/messages' do
    protected!(DB)
    content_type :json
    DB[:messages].to_a.to_json
  end
end
