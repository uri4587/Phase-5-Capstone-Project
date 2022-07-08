class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :exercise_name, :instructions, :youtube_url, :results, :completed
  has_one :workout
end
