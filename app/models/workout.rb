class Workout < ApplicationRecord
  belongs_to :day
  belongs_to :trainer
  has_many :exercises, dependent: :destroy
end
