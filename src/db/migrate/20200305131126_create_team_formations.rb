class CreateTeamFormations < ActiveRecord::Migration[6.0]
  def change
    create_table :team_formations, id: false do |t|
      t.string :team_id, null: false
      t.references :number, foreign_key: { to_table: :pmonsters }, null: false, type: :string

      t.timestamps
    end
    add_index :team_formations, [:number, :team_id], unique: true
  end
end
