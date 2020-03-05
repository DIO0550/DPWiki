class CreateTeamFormations < ActiveRecord::Migration[6.0]
  def change
    create_table :team_formations do |t|
      t.string :team_id, null: false
      t.refarence :pmonster_number, null: false, foreign_key: true, type: :varchar(7)

      t.timestamps
    end
    add_index :team_formations, [:team_id, :pmonster_number], unique: true
  end
end
