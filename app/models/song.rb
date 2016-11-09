class Song < ActiveRecord::Base
  validates :title, :artist, :url, :user, presence: true

  belongs_to :user

end
