# frozen_string_literal: true

require File.join(File.dirname(__FILE__), 'spec_helper')
require File.join(File.dirname(__FILE__), '..', 'app', 'app')

describe 'App' do
  include Rack::Test::Methods

  def app
    @app ||= App
  end

  it 'should output hello world message' do
    expected_output = { message: 'Hello, world' }.to_json
    get '/hello'
    expect(last_response).to be_ok
    expect(last_response.header['Content-Type']).to match '^application/json'
    expect(last_response.body).to eq expected_output
  end
end
