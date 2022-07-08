class MealSerializer < ActiveModel::Serializer
  attributes :id, :meal_time, :protein, :fats, :carbs, :calories
  has_one :day
end
