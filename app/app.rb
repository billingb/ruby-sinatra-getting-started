# frozen_string_literal: true

require 'sinatra'
require 'json'

class App < Sinatra::Base
  get '/hello' do
    content_type :json
    { message: 'Hello, world' }.to_json
  end
end
