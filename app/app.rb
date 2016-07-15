# frozen_string_literal: true

require 'sinatra'
require 'json'
require 'sequel'
require File.join(File.dirname(__FILE__), 'database')
require File.join(File.dirname(__FILE__), 'helpers', 'authentication')
require File.join(File.dirname(__FILE__), 'controllers', 'authentication')
require File.join(File.dirname(__FILE__), 'controllers', 'messages')

set :root, File.dirname(__FILE__)

class App < Sinatra::Base
  helpers Helpers::Authentication
  register Controllers::Authentication
  register Controllers::Messages

  get '/' do
    render :html, :index
  end

  get '/hello' do
    content_type :json
    { message: 'Hello, world' }.to_json
  end

  #If the route doesn't exist assume it is part of the client
  get '/*' do
    render :html, :index
  end
end
