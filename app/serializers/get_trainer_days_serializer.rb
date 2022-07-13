class GetTrainerDaysSerializer < ActiveModel::Serializer
  attributes :trainer_serialized_info
  # def all_days
  #   day_for_dropdown = []
  #   if object.workouts
  #     object.workouts.each do |workouts|
  #       day_for_dropdown << { 
  #       "workout_id": workout.id
  #     }
  #   end
  #   final_obj = { day_for_dropdown: day_for_dropdown}
  # end
  # end
  def trainer_serialized_info
    trainer_workouts = []
    trainer_exercises = [] 
    trainer_clients_day_meals = []
    trainer_days = []
    trainer_clients = []
    if object.trainees
      object.trainees.each do |trainee|
        trainer_clients << { 
          "trainee_id": trainee.id,
          "trainee_first_name": trainee.first_name,
          "trainee_last_name": trainee.last_name,
          "workout_days": trainee.days
        }
        if object.days
          object.days.each do |day|
            trainer_days << { 
              "id": day.id,
              "date": day.date_of_day,
              "daily_steps": day.daily_steps,
              "daily_weight": day.daily_weight,
              "protein_day_totals": day.protein_day_totals,
              "fats_day_total": day.fats_day_total,
              "carbs_day_total": day.carbs_day_total
            }
            if day.meals.each do |each_meal|
              trainer_clients_day_meals << {
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
              trainer_workouts << {
                "workout_day_reference": workout.day.id,
                "workout_trainee_name": workout.day.trainee,
                "workout_day_date": workout.day.date_of_day
              }
              if workout.exercises.each do |each_exercise|
              
              
                trainer_exercises << { 
                  "id": each_exercise.id,
                  "exercises_workout_reference": each_exercise.workout.id, 
                  "exercises_day_reference": each_exercise.workout.day.id,
                  "exercises_date_of_day": each_exercise.workout.day.date_of_day,
                  "exercise_name": each_exercise.exercise_name,
                  "instructions": each_exercise.instructions,
                  "youtube_url": each_exercise.youtube_url,
                  "results": each_exercise.results,
                  "completed": each_exercise.completed,
                  "clients": each_exercise.workout.trainer.trainees
                }
                end 
              end
            end
          end
          end
        end
      end
    end
    final_object = { 
    trainer_meals: trainer_clients_day_meals,
    trainer_days: trainer_days,
    meals: trainer_clients_day_meals, 
    workouts: trainer_workouts,
    trainer_exercises: trainer_exercises,
    trainers_clients: trainer_clients
    }
  end
end
