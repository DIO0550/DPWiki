require 'csv'
require 'logger'

class InitializePMonster < ActiveRecord::Migration[6.0]
  
  def change
    csv_path = File.expand_path('../../csv/pmonsters.csv', __FILE__)
    CSV.foreach(csv_path, headers: true) do |row|
      log_path = File.expand_path('../../../log/migrate.log', __FILE__)
      log = Logger.new(log_path)
      log.info(row)
      column_data = {
        number: row["Number"],
        monster_name: row["Name"],
        type1_id: row["Type1"],
        type2_id: row["Type2"],
        hit_point: row["HitPoint"],
        attack: row["Attack"],
        defence: row["Defence"],
        special_attack: row["SpecialAttack"],
        special_defence: row["SpecialDefence"],
        speed: row["Speed"]
      }
      log.info(column_data)
      begin
        Pmonster.create!(column_data)
      rescue => exception
        log.debug(exception.message)
      end
    end
  end
end
