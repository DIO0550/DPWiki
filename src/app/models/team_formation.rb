class TeamFormation < ApplicationRecord
    belongs_to :pmonster, foreign_key: :number
end
