# frozen_string_literal: true
# More info at https://github.com/guard/guard#readme

guard 'rake', task: 'spec' do
  watch(/^spec\/.+_spec\.rb/)
  watch(/^app\/(.+)\.rb/) { |m| "spec/#{m[1]}_spec.rb" }
end

guard :rubocop do
  watch(/.+\.(rb|rake)/)
  watch(/(Guard|Rake)file/)
  watch(/(?:.+\/)?\.rubocop\.yml/) { |m| File.dirname(m[0]) }
end
