class Comment < ActiveRecord::Base
  validates :body, :song, :user, presence: true

  belongs_to :user
  belongs_to :song

end
