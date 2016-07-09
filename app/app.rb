# frozen_string_literal: true

require 'sinatra'
require 'json'
require 'sequel'
require File.join(File.dirname(__FILE__), 'database')
require File.join(File.dirname(__FILE__), 'helpers', 'authentication')

class App < Sinatra::Base
  helpers Helpers::Authentication

  get '/hello' do
    content_type :json
    { message: 'Hello, world' }.to_json
  end

  get '/messages' do
    protected!
    content_type :json
    Database::DB[:messages].to_a.to_json
  end
end
