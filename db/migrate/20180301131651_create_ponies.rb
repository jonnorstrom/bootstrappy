class CreatePonies < ActiveRecord::Migration[5.1]
  def change
    create_table :ponies do |t|
      t.integer :age
      t.string :breed
      t.integer :height
      t.string :color

      t.timestamps
    end
  end
end
