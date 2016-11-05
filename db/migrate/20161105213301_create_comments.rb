class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :user_id
      t.integer :video_id
      t.integer :parent_comment_id, :default => -1
      t.integer :comment_id
      t.text :body, null:false

      t.timestamps null: false
    end
    add_index :comments, :user_id
    add_index :comments, :video_id
  end
end
