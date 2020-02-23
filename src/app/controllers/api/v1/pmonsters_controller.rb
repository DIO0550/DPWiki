require "#{Rails.root}/app/controllers/application_controller.rb"

class Api::V1::PmonstersController < ApplicationController
    def index
        select_column = "type1s.type1_name, type2s.type2_name, pmonsters.number, pmonsters.monster_name, pmonsters.hit_point, pmonsters.attack, pmonsters.defence, pmonsters.special_attack, pmonsters.special_defence, pmonsters.speed"
        @pmonsters = Pmonster.joins(:type1).joins(:type2).select(select_column)
        render json: @pmonsters
    end
end
