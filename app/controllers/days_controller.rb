class DaysController < ApplicationController
    def index
        days = Day.all 
        render json: days, status: :ok
    end

    def show
        day = Day.find(params[:id])
        render json: day, status: :ok
    end

    def create 
        day = Day.create!(day_params)
        render json: day, status: :ok
    end

    def update
        day = Day.find(params[:id])
        day.update!(day_params)
        render json: day, status: :ok
    end
    
    def destroy 
        day = Day.find(params[:id])
        day.destroy
        render json: day
    end

    private 

    def day_params
        params.permit(
            :date_of_day, 
            :daily_steps, 
            :daily_weight, 
            :protein_day_totals, 
            :fats_day_total, 
            :carbs_day_total, 
            :trainee_id
        )
    end
end
