class MealsController < ApplicationController
    def index
        meals = Meal.all 
        render json: meals, status: :ok
    end

    def show
        meal = Meal.find(params[:id])
        render json: meal, status: :ok
    end

    def create 
        meal = Meal.create!(meal_params)
        Day.update_daily_macros
        render json: meal, status: :ok
    end

    def update
        meal = Meal.find(params[:id])
        meal.update!(meal_params)
        render json: meal, status: :ok
    end
    
    def destroy 
        meal = Meal.find(params[:id])
        meal.destroy
        render json: meal
    end

    private 

    def meal_params
        params.permit(:meal_time, :protein, :fats, :carbs, :day_id)
    end
end
