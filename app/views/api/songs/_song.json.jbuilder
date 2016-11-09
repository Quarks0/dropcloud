json.extract! song, :id,:title, :artist, :url, :image_url, :user
json.comments do
  json.array! song.comments do |comment|
    json.body comment.body
    json.username comment.user.username
    json.parent_id comment.parent_id
  end
end
