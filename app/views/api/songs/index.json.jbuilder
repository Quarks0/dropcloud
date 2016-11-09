# @songs.each do |song|
#   json.set! song.id do
#     json.partial! 'song', song: song
#   end
# end

json.array! @songs do |song|
  json.partial! 'song', song: song
end
