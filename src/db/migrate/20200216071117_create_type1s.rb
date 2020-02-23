class CreateType1s < ActiveRecord::Migration[6.0]
  def change
    create_table :type1s, :id => false do |t|
      t.column :id, 'int(11) PRIMARY KEY'
      t.string :type1_name

      t.timestamps
    end
    add_index :type1s, :id, unique: true
  end
end
