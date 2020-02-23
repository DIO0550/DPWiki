class CreateType2s < ActiveRecord::Migration[6.0]
  def change
    create_table :type2s, :id => false do |t|
      t.column :id, 'int(11) PRIMARY KEY'
      t.string :type2_name

      t.timestamps
    end
    add_index :type2s, :id, unique: true
  end
end
