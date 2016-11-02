class AddComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :user_id, null: false
      t.integer :song_id, null: false
      t.integer :parent_id
      t.text :body, null: false
      t.timestamps null: false
    end
    add_index :comments, [:user_id, :song_id, :parent_id]
  end
end
