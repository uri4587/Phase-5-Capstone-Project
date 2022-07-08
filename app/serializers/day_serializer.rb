class DaySerializer < ActiveModel::Serializer
  attributes :id, :daily_steps, :daily_weight, :protein_day_totals, :fats_day_total, :carbs_day_total, :meals, :workouts
  # has_one :trainee
  # has_many :workouts

  def meals 
    object.meals
  end

  def workouts 
    formatted_workouts = []
    object.workouts.each do |workout|
      formatted_workout = { 
        id: workout.id,
        trainer: workout.trainer,
        exercises: workout.exercises
       }
       formatted_workouts.push(formatted_workout)
    end
    formatted_workouts
  end
end
