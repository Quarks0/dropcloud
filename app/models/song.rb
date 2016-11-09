class Song < ActiveRecord::Base
  validates :title, :artist, :url, :user, presence: true

  belongs_to :user
  has_many :comments

end
