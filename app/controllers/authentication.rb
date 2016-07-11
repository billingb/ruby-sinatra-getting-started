# frozen_string_literal: true

require File.join(File.dirname(__FILE__), '..', 'entities', 'user')
require File.join(File.dirname(__FILE__), '..', 'repositories', 'user')

module Controllers
  module Authentication
    def self.registered(app)
      app.post '/login' do
        { message: 'success' }.to_json
      end

      app.post '/signup' do
        user = Entities::User.create(params[:email], params[:password])
        Repositories::User.create_user user
        status 201
        { message: "new user for email #{user.email} created" }.to_json
      end
    end
  end
end
