# frozen_string_literal: true

require 'sinatra'
require 'json'
require 'sequel'
require File.join(File.dirname(__FILE__), 'database')
require File.join(File.dirname(__FILE__), 'helpers', 'authentication')
require File.join(File.dirname(__FILE__), 'controllers', 'authentication')
require File.join(File.dirname(__FILE__), 'controllers', 'messages')

class App < Sinatra::Base
  helpers Helpers::Authentication
  register Controllers::Authentication
  register Controllers::Messages

  get '/hello' do
    content_type :json
    { message: 'Hello, world' }.to_json
  end
end
