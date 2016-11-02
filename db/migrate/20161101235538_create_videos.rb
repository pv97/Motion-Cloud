class CreateVideos < ActiveRecord::Migration
  def change
    create_table :videos do |t|
      t.string :title, null:false
      t.text :description, null:false
      t.string :url, null:false

      t.timestamps null: false
    end
  end
end
