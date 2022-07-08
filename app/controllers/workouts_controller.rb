class WorkoutsController < ApplicationController
    def index
        workouts = Workout.all 
        render json: workouts, status: :ok
    end

    def show
        workout = Workout.find(params[:id])
        render json: workout, status: :ok
    end

    def create 
        workout = Workout.create!(workout_params)
        render json: workout, status: :ok
    end

    def destroy 
        workout = Workout.find(params[:id])
        workout.destroy
        render json: workout
    end

    private 

    def workout_params
        params.permit(:day_id, :trainer_id)
    end
end
