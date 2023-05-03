class ApiGreetingsController < ApplicationController
    def random
        @greeting = Greeting.order("RANDOM()").pluck(:message).first
        render json: { message: @greeting }
    end
end