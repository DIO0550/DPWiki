require "#{Rails.root}/app/controllers/application_controller.rb"

module Api
    module V1
        class PmonstersController < ApplicationController
            def index
                @pmonsters = Pmonster.all
                render json: @pmonsters
            end
        end
    end
end
