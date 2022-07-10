# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_07_10_183911) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "days", force: :cascade do |t|
    t.datetime "date_of_day"
    t.integer "daily_steps", default: 0, null: false
    t.float "daily_weight", default: 0.0, null: false
    t.integer "protein_day_totals", default: 0, null: false
    t.integer "fats_day_total", default: 0, null: false
    t.integer "carbs_day_total", default: 0, null: false
    t.bigint "trainee_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["trainee_id"], name: "index_days_on_trainee_id"
  end

  create_table "exercises", force: :cascade do |t|
    t.string "exercise_name"
    t.string "instructions"
    t.string "youtube_url", default: "", null: false
    t.string "results", default: "", null: false
    t.boolean "completed", default: false
    t.bigint "workout_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["workout_id"], name: "index_exercises_on_workout_id"
  end

  create_table "meals", force: :cascade do |t|
    t.datetime "meal_time"
    t.integer "protein"
    t.integer "fats"
    t.integer "carbs"
    t.bigint "day_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["day_id"], name: "index_meals_on_day_id"
  end

  create_table "message_threads", force: :cascade do |t|
    t.boolean "approved"
    t.bigint "trainee_id", null: false
    t.bigint "trainer_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["trainee_id"], name: "index_message_threads_on_trainee_id"
    t.index ["trainer_id"], name: "index_message_threads_on_trainer_id"
  end

  create_table "trainees", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "date_of_birth"
    t.string "profile_pic", default: ""
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "trainers", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "username"
    t.string "password_digest"
    t.string "profile_pic"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "workouts", force: :cascade do |t|
    t.bigint "day_id", null: false
    t.bigint "trainer_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["day_id"], name: "index_workouts_on_day_id"
    t.index ["trainer_id"], name: "index_workouts_on_trainer_id"
  end

  add_foreign_key "days", "trainees"
  add_foreign_key "exercises", "workouts"
  add_foreign_key "meals", "days"
  add_foreign_key "message_threads", "trainees"
  add_foreign_key "message_threads", "trainers"
  add_foreign_key "workouts", "days"
  add_foreign_key "workouts", "trainers"
end
