class User < ApplicationRecord
    has_many :clips
    has_many :clip_packs, through: :clips



 has_secure_password
 validates :username, presence: true, uniqueness: true
end
