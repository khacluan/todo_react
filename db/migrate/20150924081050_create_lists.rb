class CreateLists < ActiveRecord::Migration
  def change
    create_table :lists do |t|
      t.string :title
      t.text :content
      t.text :url

      t.timestamps null: false
    end
  end
end
