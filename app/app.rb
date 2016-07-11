# frozen_string_literal: true

require 'sinatra'
require 'json'
require 'sequel'
require 'warden'
require File.join(File.dirname(__FILE__), 'database')
require File.join(File.dirname(__FILE__), 'helpers', 'authentication')
require File.join(File.dirname(__FILE__), 'repositories', 'user')

class App < Sinatra::Base
  use Rack::Session::Cookie
  enable :sessions
  helpers Helpers::Authentication

  post '/auth/unauthenticated' do
    # headers['WWW-Authenticate'] = 'Basic realm="Restricted Area"'
    status 401
    env['warden'].custom_failure!
  end

  post '/auth/login' do
    env['warden'].authenticate!

    {message: 'Success'}.to_json
  end

  get '/auth/logout' do
    env['warden'].raw_session.inspect
    env['warden'].logout
    {message: 'Success'}.to_json
  end

  get '/hello' do
    content_type :json
    { message: 'Hello, world' }.to_json
  end

  get '/messages' do
    env['warden'].authenticate!
    content_type :json
    Database::DB[:messages].to_a.to_json
  end

  use Warden::Manager do |config|
    config.serialize_into_session{|user| user.email }
    config.serialize_from_session{|email| Repositories::User.find_user_by_email(email) }

    config.scope_defaults :default,
                          strategies: [:password],
                          action: 'auth/unauthenticated'
    config.failure_app = self
  end

  Warden::Manager.before_failure do |env,opts|
    # Because authentication failure can happen on any request but
    # we handle it only under "post '/auth/unauthenticated'", we need
    # to change request to POST
    env['REQUEST_METHOD'] = 'POST'
    # And we need to do the following to work with  Rack::MethodOverride
    env.each do |key, value|
      env[key]['_method'] = 'post' if key == 'rack.request.form_hash'
    end
  end

  Warden::Strategies.add(:password) do
    def valid?
      Helpers::Authentication::password_valid?(params)
    end

    def authenticate!
      access_granted = Helpers::Authentication::password_authenticate!(params)
      !access_granted ? fail!('Could not log in') : success!(access_granted)
    end
  end
end
