require_relative '../../app/models/type2.rb'

class InitializeType2 < ActiveRecord::Migration[6.0]
  def change
    types = ["ノーマル", "ほのお", "みず", "でんき", "くさ", "こおろ", "かくとう", "どく", "じめん", "ひこう", "エスパー", "むし", "いわ", "ゴースト", "ドラゴン", "あく", "はがね", "フェアリー", "なし"]
    types.each.with_index(1) do |type, i|
      Type2.create(id: i, name: type)
    end
  end
end
