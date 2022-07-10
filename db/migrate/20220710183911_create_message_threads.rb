class CreateMessageThreads < ActiveRecord::Migration[7.0]
  def change
    create_table :message_threads do |t|
      t.boolean :approved
      t.belongs_to :trainee, null: false, foreign_key: true
      t.belongs_to :trainer, null: false, foreign_key: true

      t.timestamps
    end
  end
end
