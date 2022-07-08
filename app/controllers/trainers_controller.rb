class TrainersController < ApplicationController
    def index 
        trainers = Trainer.all 
        render json: trainers, status: :ok
    end

    def show
        trainer = Trainer.find(params[:id])
        render json: trainer, status: :ok
    end

    def create  
        trainer = Trainer.create!(trainer_params)
        render json: trainer, status: :ok
    end

    def destroy 
        trainer = Trainer.find(params[:id])
        trainer.destroy
        head :no_content
    end
    
    private 

    def trainer_params
        params.permit(:first_name, :last_name, :email, :username, :password)
    end
end
