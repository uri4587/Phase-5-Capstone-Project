class Meal < ApplicationRecord
  belongs_to :day

  validates :meal_time, presence: true, uniqueness:true
  validates :protein, presence: true
  validates :fats, presence: true
  validates :carbs, presence: true
end
