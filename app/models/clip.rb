class Clip < ApplicationRecord
    has_many :clip_packs
    has_many :users, through: :clip_packs
end
