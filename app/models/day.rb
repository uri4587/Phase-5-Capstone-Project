class Day < ApplicationRecord
  belongs_to :trainee
  has_many :meals, dependent: :destroy
  has_many :workouts, dependent: :destroy
  has_many :trainers, through: :workouts

  def update_daily_macros
    total_protein = []
    total_fats = []
    total_carbs = []
    self.meals.map do |meal|
      total_protein.push(meal.protein)
      total_fats.push(meal.fats)
      total_carbs.push(meal.carbs)

    end
    self.update(
      protein_day_totals: total_protein.sum,
      fats_day_total: total_fats.sum,
      carbs_day_total: total_carbs.sum
    ) 
  
  end

  # def protein_totals
  #   total_protein = []
  #   self.meals.map do |meal|
  #     total_protein.push(meal.protein)
  #   end
  #   self.update(protein_day_totals: total_protein.sum) 
  
  # end


  # def fat_total
  #   total_fat = []
  #   self.meals.map do |meal|
  #     total_fat.push(meal.fats)
  #   end
  #   total_fat.sum
  # end

  # def carb_total
  #   total_carb = []
  #   self.meals.map do |meal|
  #     total_carb.push(meal.carb)
  #   end
  #   total_carb.sum
  # end
end
