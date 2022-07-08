class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :exercises, :trainer
  has_many :exercises
  has_one :trainer 

  def exercises
    object.exercises
  end

  def trainer
    object.trainer
  end
end
