# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161109183923) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "song_id",    null: false
    t.integer  "parent_id"
    t.text     "body",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "comments", ["user_id", "song_id", "parent_id"], name: "index_comments_on_user_id_and_song_id_and_parent_id", using: :btree

  create_table "playlist_contents", force: :cascade do |t|
    t.integer "playlist_id", null: false
    t.integer "song_id",     null: false
  end

  add_index "playlist_contents", ["playlist_id", "song_id"], name: "index_playlist_contents_on_playlist_id_and_song_id", using: :btree

  create_table "playlists", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string  "name",    null: false
  end

  add_index "playlists", ["user_id"], name: "index_playlists_on_user_id", unique: true, using: :btree

  create_table "songs", force: :cascade do |t|
    t.string   "title",      null: false
    t.string   "artist",     null: false
    t.string   "url",        null: false
    t.string   "image_url"
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "songs", ["user_id"], name: "index_songs_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "description"
  end

  add_index "users", ["username", "email", "session_token"], name: "index_users_on_username_and_email_and_session_token", unique: true, using: :btree

end
