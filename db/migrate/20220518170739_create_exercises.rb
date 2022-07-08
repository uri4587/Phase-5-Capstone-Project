class CreateExercises < ActiveRecord::Migration[7.0]
  def change
    create_table :exercises do |t|
      t.string :exercise_name
      t.string :instructions
      t.string :youtube_url, default: "", null: false
      t.string :results, default: "", null: false
      t.boolean :completed, default: false
      t.belongs_to :workout, null: false, foreign_key: true

      t.timestamps
    end
  end
end
