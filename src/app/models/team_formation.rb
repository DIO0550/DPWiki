class TeamFormation < ApplicationRecord
    belongs_to :pmonster, foreign_key: 'number', class_name: 'Pmonster'
end
