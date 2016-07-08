# frozen_string_literal: true

Sequel.migration do
  up do
    create_table(:messages) do
      primary_key :id
      String :message, null: false
    end
  end

  down do
    drop_table(:messages)
  end
end
