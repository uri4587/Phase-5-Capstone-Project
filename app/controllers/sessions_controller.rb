class SessionsController < ApplicationController
    
    def login_trainee
        trainee = Trainee.find_by(username: params[:username])
        
        if trainee&.authenticate(params[:password])
            session[:trainee_id] = trainee.id
            render json: trainee, status: :ok
        else 
            render json: {error: "Invalid Username and/or Password"}, status: :unauthorized
        end
    end

    def login_trainer
        trainer = Trainer.find_by(username: params[:username])

        if trainer&.authenticate(params[:password])
            session[:trainer_id] = trainer.id
            render json: trainer, status: :ok
        else 
            render json: {error: "Invalid Username and/or Password"}, status: :unauthorized
        end
    end

    def get_current_trainee_or_trainer
        if current_trainee
            render json: current_trainee
        elsif current_trainer
            render json: current_trainer
        else 
            render json: {error: "Unauthorized User"}, status: :unauthorized
        end
    end

    def logout 
        session.delete :trainee_id
        session.delete :trainer_id
        head :no_content
    end
end
