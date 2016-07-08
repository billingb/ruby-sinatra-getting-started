# frozen_string_literal: true

require File.join(File.dirname(__FILE__), '..', 'spec_helper')
require File.join(File.dirname(__FILE__), '..', '..', 'app', 'entities', 'user')

describe 'Entities::User' do
  it 'should set a user and confirm the password when password is good' do
    user = Entities::User.new(email: 'test@test.com')
    user.password = 'testpass'
    expect(user.authenticate?('testpass')).to be true
  end

  it 'should not authenticate when the passwords do not match' do
    user = Entities::User.new(email: 'test@test.com')
    user.password = 'testpass'
    expect(user.authenticate?('blah')).to be false
  end
end
