require_relative '../../app/models/type1.rb'

class InitializeType1 < ActiveRecord::Migration[6.0]
  def change
    types = ["ノーマル", "ほのお", "みず", "でんき", "くさ", "こおろ", "かくとう", "どく", "じめん", "ひこう", "エスパー", "むし", "いわ", "ゴースト", "ドラゴン", "あく", "はがね", "フェアリー"]
    types.each.with_index(1) do |type, i|
      Type1.create(id: i, name: type)
    end
  end
end
