class CreateVideos < ActiveRecord::Migration
  def change
    create_table :videos do |t|
      t.integer :user_id
      t.string :title, null:false
      t.text :description
      t.string :url, null:false
      t.string :thumbnail_url
      t.integer :view_count, :default => 0

      t.timestamps null: false
    end

    add_index :videos, :user_id
  end
end
