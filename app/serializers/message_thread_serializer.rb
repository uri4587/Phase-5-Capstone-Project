class MessageThreadSerializer < ActiveModel::Serializer
  attributes :id, :approved
  has_one :trainee
  has_one :trainer
end
