class TraineesController < ApplicationController
    def index 
        trainees = Trainee.all 
        render json: trainees, status: :ok
    end

    def show
        trainee = Trainee.find(params[:id])
        render json: trainee, status: :ok, serializer: GetTraineeDaysSerializer
    end

    def create  
        trainee = Trainee.create!(trainee_params)
        render json: trainee, status: :ok
    end

    def destroy 
        trainee = Trainee.find(params[:id])
        trainee.destroy
        head :no_content
    end
    
    private 

    def trainee_params
        params.permit(:first_name, :last_name, :email, :username, :password, :date_of_birth)
    end
end
