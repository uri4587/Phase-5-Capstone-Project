class Exercise < ApplicationRecord
  belongs_to :workout

  validates :exercise_name, uniqueness: true, presence: true
  validates :instructions, presence: true
end
