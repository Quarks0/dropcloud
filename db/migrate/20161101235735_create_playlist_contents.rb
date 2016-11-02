class CreatePlaylistContents < ActiveRecord::Migration
  def change
    create_table :playlist_contents do |t|
        t.integer :playlist_id, null: false
        t.integer :song_id, null: false
    end
      add_index :playlist_contents, [:playlist_id, :song_id]
  end
end
