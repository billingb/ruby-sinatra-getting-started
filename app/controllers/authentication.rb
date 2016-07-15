# frozen_string_literal: true

require File.join(File.dirname(__FILE__), '..', 'entities', 'user')
require File.join(File.dirname(__FILE__), '..', 'repositories', 'user')

module Controllers
  module Authentication
    def self.registered(app)
      app.post '/login' do
        content_type :json
        protected!
        { token: (params[:token] ? params[:token] : "#{params[:email]}//#{params[:password]}") }.to_json
      end

      app.post '/signup' do
        content_type :json
        user = Entities::User.create(params[:email], params[:password])
        Repositories::User.create_user user
        status 201
        { token: "#{user.email}//#{params[:password]}" }.to_json
      end
    end
  end
end
