# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Day.destroy_all
Exercise.destroy_all
Meal.destroy_all
Trainee.destroy_all
Trainer.destroy_all
Workout.destroy_all

trainee1 = Trainee.create(first_name: "Uri", last_name: "Sky", username: "uman0330", email: "uri@gmail.com", password: "123", date_of_birth: Faker::Date.between(from: '1960-01-01', to: '2007-01-01'))
trainee2 = Trainee.create(first_name: "Langchao", last_name: "Wu", username: "langy123", email: "langy@gmail.com", password: "123", date_of_birth: Faker::Date.between(from: '1960-01-01', to: '2007-01-01'))

day_for_trainee1 = Day.create(date_of_day: Date.today, trainee_id: trainee1.id)
day_for_trainee1_2 = Day.create(date_of_day:Date.tomorrow, trainee_id: trainee1.id)
day_for_trainee2 = Day.create(date_of_day: Date.today, trainee_id: trainee2.id)
day_for_trainee2_2 = Day.create(date_of_day:Date.tomorrow, trainee_id: trainee2.id)

meal_for_trainee1 = Meal.create(meal_time: Time.now.in_time_zone('America/New_York'), protein: 20, fats: 15, carbs: 50, day_id: day_for_trainee1.id)
meal2_for_trainee1 = Meal.create(meal_time: Time.now.in_time_zone('America/New_York'), protein: 50, fats: 30, carbs: 100, day_id: day_for_trainee1.id)

trainer_for_trainee1 = Trainer.create(first_name: "Joe", last_name: "Smith", username: "jsmith123", email: "jsmith@yahoo.com", password: "123")

workout_for_trainee1 = Workout.create(day_id: day_for_trainee1.id, trainer_id: trainer_for_trainee1.id)
workout2_for_trainee1 = Workout.create(day_id: day_for_trainee1_2.id, trainer_id: trainer_for_trainee1.id)
workout_for_trainee2 = Workout.create(day_id: day_for_trainee2.id, trainer_id: trainer_for_trainee1.id)
workout2_for_trainee2 = Workout.create(day_id: day_for_trainee2_2.id, trainer_id: trainer_for_trainee1.id)

message_thread1 = MessageThread.create(approved: true, trainee_id: trainee1.id, trainer_id: trainer_for_trainee1.id)
message_thread2 = MessageThread.create(approved: true, trainee_id: trainee2.id, trainer_id: trainer_for_trainee1.id)

exercise1_for_workout1 = Exercise.create(exercise_name: "Lat Pull Down", instructions: "3 sets, 8-15 reps, 3 RIR", workout_id: workout_for_trainee1.id, youtube_url: "https://www.youtube.com/watch?v=MyQVLFBwlJ8")
exercise2_for_workout1 = Exercise.create(exercise_name: "Barbell Bent Over Rows", instructions: "4 sets, 10-20 reps, 3 RIR", workout_id: workout_for_trainee1.id, youtube_url: "https://www.youtube.com/watch?v=6FZHJGzMFEc")
exercise3_for_workout1 = Exercise.create(exercise_name: "Seated Row", instructions: "3 sets, 8-12 reps, 3 RIR", workout_id: workout2_for_trainee1.id, youtube_url: "https://www.youtube.com/watch?v=GZbfZ033f74")
exercise4_for_workout1 = Exercise.create(exercise_name: "Flat Bench Press Machine", instructions: "3 sets, 10-20 reps, 3 RIR", workout_id: workout2_for_trainee1.id, youtube_url: "https://www.youtube.com/watch?v=aV1U_mK3XOs")
exercise5_for_workout1 = Exercise.create(exercise_name: "Cable Crunches", instructions: "3 sets, 10-20 reps, 3 RIR", workout_id: workout2_for_trainee1.id, youtube_url: "https://www.youtube.com/watch?v=AV5PmZJIrrw&t=129s")
exercise6_for_workout1 = Exercise.create(exercise_name: "Tricep Pushdown", instructions: "3 sets, 8-15 reps, 3 RIR", workout_id: workout_for_trainee1.id, youtube_url: "https://www.youtube.com/watch?v=6Fzep104f0s")


