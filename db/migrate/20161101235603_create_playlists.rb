class CreatePlaylists < ActiveRecord::Migration
  def change
    create_table :playlists do |t|
      t.integer :user_id, null: false
      t.string :name, null: false
    end
    add_index :playlists, :user_id, unique: true
  end
end
