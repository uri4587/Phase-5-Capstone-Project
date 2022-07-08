class TrainerSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :password_digest, :profile_pic, :is_trainer

  def is_trainer 
    true
  end
end
