class ApplicationController < ActionController::API
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_record_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found_response

    include ActionController::Cookies

    def current_trainee 
      @current_trainee ||= session[:trainee_id] && Trainee.find_by(id: session[:trainee_id])
    end

    def current_trainer 
      @current_trainer ||= session[:trainer_id] && Trainer.find_by(id: session[:trainer_id])
    end

    private 
    def render_invalid_record_response(invalid)
      render json: {errors: [invalid.record.errors]}, status: :unprocessable_entity
    end

    def render_record_not_found_response(invalid)
        render json: {error: invalid}, status: :not_found
    end
end
