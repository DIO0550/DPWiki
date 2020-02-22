require "#{Rails.root}/app/controllers/application_controller.rb"

class Api::V1::PmonstersController < ApplicationController
    def index
        @pmonsters = Pmonster.all
        render json: @pmonsters
    end
end
