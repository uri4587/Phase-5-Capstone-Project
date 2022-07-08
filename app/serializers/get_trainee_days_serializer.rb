class GetTraineeDaysSerializer < ActiveModel::Serializer
  attributes :trainee_serialized_info

  def trainee_serialized_info
    trainee_days = []
    trainee_days_workouts = []
    trainee_days_meals = []
    trainee_days_exercises = []
    if object.days 
      object.days.each do |day|
        trainee_days << {
          "id": day.id, 
          "date_of_day": day.date_of_day,
          "daily_steps": day.daily_steps,
          "daily_weight": day.daily_weight,
          "protein_day_totals": day.protein_day_totals,
          "fats_day_total": day.fats_day_total,
          "carbs_day_total": day.carbs_day_total
        }
          if day.meals.each do |each_meal|
            trainee_days_meals << {
              "meal_day_reference": each_meal.day.id,
              "id": each_meal.id,
              "meal_time": each_meal.meal_time,
              "protein": each_meal.protein,
              "fats": each_meal.fats,
              "carbs": each_meal.carbs
            }
            end
          end
          if day.workouts.each do |workout|
            trainee_days_workouts << {
              "workout_day_reference": workout.day.id,
              "workout_trainer_name": "#{workout.trainer.first_name} #{workout.trainer.last_name}"
            }
            if workout.exercises.each do |each_exercise|
              
              
              trainee_days_exercises << { 
                "id": each_exercise.id,
                "exercises_workout_reference": each_exercise.workout.id, 
                "exercises_day_reference": each_exercise.workout.day.id,
                "exercises_date_of_day": each_exercise.workout.day.date_of_day,
                "exercise_name": each_exercise.exercise_name,
                "instructions": each_exercise.instructions,
                "youtube_url": each_exercise.youtube_url,
                "results": each_exercise.results,
                "completed": each_exercise.completed
              }
              end 
            end


            end
          end
          
          
          
          end  
        end
        

          final_object = {
            trainee_days: trainee_days,
            trainee_days_workouts: trainee_days_workouts,
            trainee_days_exercises: trainee_days_exercises, 
            trainee_days_meals: trainee_days_meals
          }

          return final_object
    end
end
