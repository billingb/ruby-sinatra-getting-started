# frozen_string_literal: true

namespace :guard do
  desc 'run rubocop'
  task :rubocop do
    sh 'bundle exec guard --plugin rubocop --no-interactions'
  end

  desc 'run unit tests'
  task :specs do
    sh 'bundle exec guard --plugin rake --no-interactions'
  end
end
