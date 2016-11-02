class Songs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.string :title, null: false
      t.string :artist, null: false
      t.string :url, null: false
      t.string :image_url
      t.integer :user_id, null: false
      t.timestamps null: false
    end
    add_index :songs, :user_id
  end
end
