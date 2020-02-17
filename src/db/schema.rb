# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_02_17_130050) do

  create_table "pmonsters", primary_key: "number", id: :integer, default: nil, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name"
    t.integer "type1_id", null: false
    t.integer "type2_id", null: false
    t.integer "hit_point"
    t.integer "attack"
    t.integer "defence"
    t.integer "special_attack"
    t.integer "special_defence"
    t.integer "speed"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["type1_id"], name: "index_pmonsters_on_type1_id"
    t.index ["type2_id"], name: "index_pmonsters_on_type2_id"
  end

  create_table "type1s", id: :integer, default: nil, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["id"], name: "index_type1s_on_id", unique: true
  end

  create_table "type2s", id: :integer, default: nil, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["id"], name: "index_type2s_on_id", unique: true
  end

  add_foreign_key "pmonsters", "type1s"
  add_foreign_key "pmonsters", "type2s"
end
