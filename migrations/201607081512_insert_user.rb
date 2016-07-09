# frozen_string_literal: true

Sequel.migration do
  up do
    self[:users].insert(email: 'billingb@gmail.com',
                        password_digest: '$2a$10$W6WFppTgQGSks3OVivaK8eVwqFkr6Ci.rIRHubikz8ibtuUxfu6tm')
  end
end
