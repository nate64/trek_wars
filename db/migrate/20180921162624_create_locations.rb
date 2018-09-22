class CreateLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :locations do |t|
      t.string :name
      t.string :nerd_type

      t.timestamps
    end
  end
end
