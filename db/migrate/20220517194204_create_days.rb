class CreateDays < ActiveRecord::Migration[7.0]
  def change
    create_table :days do |t|
      t.datetime :date_of_day
      t.integer :daily_steps, default: 0, null: false
      t.float :daily_weight, default: 0.0, null: false
      t.integer :protein_day_totals, default:0, null: false
      t.integer :fats_day_total, default:0, null: false
      t.integer :carbs_day_total, default:0, null: false
      t.belongs_to :trainee, null: false, foreign_key: true

      t.timestamps
    end
  end
end
