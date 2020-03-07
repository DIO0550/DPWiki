require "#{Rails.root}/app/controllers/application_controller.rb"

class Api::V1::TeamFormationsController < ApplicationController
    def index
        select_column = "team_formations.team_id, pmonsters.number, pmonsters.monster_name, type1s.type1_name, type2s.type2_name"
        @team_formations = TeamFormation.joins(pmonster: :type1).joins(pmonster: :type2).select(select_column)
        render json: @team_formations
    end
end
