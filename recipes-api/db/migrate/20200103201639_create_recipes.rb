class CreateRecipes < ActiveRecord::Migration[6.0]
  def change
    create_table :recipes do |t|
      # t.integer :user_id
      t.string :title
      t.text :instructions
      t.string :category
      t.string :url
      t.string :image
      # t.string :tags
      t.timestamps
      t.belongs_to :user, index:true, foreign_key:true
    end
  end
end
