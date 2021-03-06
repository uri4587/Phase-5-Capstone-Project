class Trainer < ApplicationRecord
    has_secure_password
    has_many :workouts 
    has_many :days, through: :workouts
    has_many :message_threads  
    has_many :trainees, through: :message_threads
    
    
    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :username, presence: true, uniqueness: true
    validates :email, format: /\w+@\w+\.{1}[a-zA-Z]{2,}/, presence: true, uniqueness: true
    validate :permitted_emails

    def permitted_emails
        unless email.match?(/gmail.com|yahoo.com|icloud.com/)
            errors.add(:permitted_emails, "Sorry, that email isn't permitted.")
        end
    end 
end
