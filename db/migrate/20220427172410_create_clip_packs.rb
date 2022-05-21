class CreateClipPacks < ActiveRecord::Migration[6.1]
  def change
    create_table :clip_packs do |t|
      t.string :name
      t.string :clips

      t.timestamps
    end
  end
end
