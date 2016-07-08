# frozen_string_literal: true

Sequel.migration do
  up do
    self[:messages].insert(message: 'My first test message')

    self[:messages].insert(message: 'Hello from messages app!')
  end
end
