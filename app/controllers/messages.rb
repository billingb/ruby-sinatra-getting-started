# frozen_string_literal: true

module Controllers
  module Messages
    def self.registered(app)
      app.get '/messages' do
        protected!
        content_type :json
        Database::DB[:messages].to_a.to_json
      end
    end
  end
end
