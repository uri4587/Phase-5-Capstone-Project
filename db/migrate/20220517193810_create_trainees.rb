class CreateTrainees < ActiveRecord::Migration[7.0]
  def change
    create_table :trainees do |t|
      t.string :first_name
      t.string :last_name
      t.string :username
      t.string :email
      t.string :password_digest
      t.datetime :date_of_birth
      t.string :profile_pic, default: ""

      t.timestamps
    end
  end
end
