class CreateTeamFormations < ActiveRecord::Migration[6.0]
  def change
    create_table :team_formations, id: false do |t|
      t.string :team_id, null: false
      t.string :number, null: false

      t.timestamps
    end
    add_foreign_key :team_formations, :pmonsters, column: :number, primary_key: "number"
    add_index :team_formations, [:number, :team_id], unique: true
  end
end
