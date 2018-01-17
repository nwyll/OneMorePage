class CreateBookClubs < ActiveRecord::Migration[5.0]
  def change
    create_table :book_clubs do |t|
      t.string :title
      t.string :author
      t.text :description
      t.date :start
      t.date :end

      t.timestamps
    end
  end
end
