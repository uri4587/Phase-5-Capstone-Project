class CreateMeals < ActiveRecord::Migration[7.0]
  def change
    create_table :meals do |t|
      t.datetime :meal_time
      t.integer :protein
      t.integer :fats
      t.integer :carbs
      t.belongs_to :day, null: false, foreign_key: true

      t.timestamps
    end
  end
end
