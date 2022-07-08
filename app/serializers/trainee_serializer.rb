class TraineeSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :username, :password_digest, :profile_pic, :is_trainee
  
  has_many :days, each_serializer: DaySerializer

  def is_trainee 
    true
  end
end
