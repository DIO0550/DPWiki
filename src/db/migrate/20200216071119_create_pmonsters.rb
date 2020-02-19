class CreatePmonsters < ActiveRecord::Migration[6.0]
  def change
    create_table :pmonsters, :id => false do |t|
      t.column :number, 'varchar(7) PRIMARY KEY'
      t.string :name
      t.references :type1, null: false, foreign_key: true, type: :integer
      t.references :type2, null: false, foreign_key: true, type: :integer
      t.integer :hit_point
      t.integer :attack
      t.integer :defence
      t.integer :special_attack
      t.integer :special_defence
      t.integer :speed

      t.timestamps
    end
  end
end
