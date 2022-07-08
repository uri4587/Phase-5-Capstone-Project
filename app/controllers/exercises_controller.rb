class ExercisesController < ApplicationController
    def index
        exercises = Exercise.all 
        render json: exercises, status: :ok
    end

    def show
        exercise = Exercise.find(params[:id])
        render json: exercise, status: :ok
    end

    def create 
        exercise = Exercise.create!(exercise_params)
        render json: exercise, status: :ok
    end

    def update
        exercise = Exercise.find(params[:id])
        exercise.update!(exercise_params)
        render json: exercise, status: :ok
    end
    
    def destroy 
        exercise = Exercise.find(params[:id])
        exercise.destroy
        render json: exercise
    end

    private 

    def exercise_params
        params.permit(:exercise_name, :instructions, :youtube_url, :results, :completed, :workout_id)
    end
end
