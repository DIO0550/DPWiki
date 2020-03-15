require "#{Rails.root}/app/controllers/application_controller.rb"

class Api::V1::Type1sController < ApplicationController
    def index
        @type1s = Type1.all.select("id, type1_name")
        render json: @type1s
    end
    
end
