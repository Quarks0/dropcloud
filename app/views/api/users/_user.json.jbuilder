json.extract! user, :id,:username, :description, :profile_url, :email
json.comments do
  json.array! user.comments do |comment|
    json.body comment.body
    json.song comment.song
    json.parent_id comment.parent_id
  end
end
json.songs do
  json.array! user.songs do |song|
    json.extract! song, :id,:title, :artist, :url, :image_url, :user
  end
end
