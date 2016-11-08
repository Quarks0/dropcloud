
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

#-----------------USERS---------------
guest = User.create({username: "Guest", password: "password", email:"guest@example.com"})
ben = User.create({username: "Quarks0", password: "2malfor9", email:"Bdippelsman10@gmail.com"})
tonia = User.create({username: "toniahsia", password: "thegreatzero", email:"Catluver94@cats.com"})
michael = User.create({username: "Toopak", password: "pakout", email:"Mpak@smentertainment.com"})
connor = User.create({username: "Monnorcurphy", password: "therealOG", email:"Connor@murphy.com"})
cindy = User.create({username: "Illestoftheill", password: "nmjcu", email:"cindy@wang.com"})
shaurya = User.create({username: "Iamgod", password: "IAMGOD", email:"god@god.com"})
humza = User.create({username: "Houstonballer", password: "houstonrepresent", email: "humza@baig.com"})
will = User.create({username: "Weeum", password: "password", email:"will@dippelsman.com"})
nick = User.create({username: "Minus", password: "password", email:"will@dippelsman.com"})

udontknow = Song.create({title: "U Don't Know", artist: "Alison Wonderland", url: "http://res.cloudinary.com/duhmzsirt/video/upload/v1478281042/02_-_U_Don_t_Know_Feat._Wayne_Coyne_atkn5r.mp3", user_id: 2})
droptop = Song.create({title: "Drop Top", artist: "Flosstradamus", url: "http://res.cloudinary.com/duhmzsirt/video/upload/v1478218636/04-Flosstradamus-Drop_Top_ft._Travis_Porter_l0rdmv.mp3", user_id: 3})
wavy = Song.create({title: "Wavy", artist: "Flosstradamus", url: "http://res.cloudinary.com/duhmzsirt/video/upload/v1478217334/06-Flosstradamus_NYMZ-Wavy_nnpouv.mp3", user_id: 4})
fairfax = Song.create({title: "Fairfax", artist: "gLadiator", url: "http://res.cloudinary.com/duhmzsirt/video/upload/v1478217290/01_-_gLAdiator_-_Fairfax_gg48yp.mp3", user_id: 5})
naked = Song.create({title: "Naked", artist: "Alison Wonderland", url: "http://res.cloudinary.com/duhmzsirt/video/upload/v1478021319/04_-_Naked_Alison_Wonderland_x_Slumberjack_xztymm.mp3", user_id: 6})
citibike = Song.create({title: "Citi Bike", artist: "Lido", url: "http://res.cloudinary.com/duhmzsirt/video/upload/v1478382946/07_-_Citi_Bike_rivi53.mp3", user_id: 2})
wau = Song.create({title: "Wau", artist: "DJ Kitten (ft Tonia Hsia)", url: "http://res.cloudinary.com/duhmzsirt/video/upload/v1478576522/wau_gbindh.mp3", user_id: 2})

guestplaylist = Playlist.create({user_id: 1, name: "Sample playlist"})

gpl1 = PlaylistContent.create({playlist_id: 1, song_id: 1})
gpl2 = PlaylistContent.create({playlist_id: 1, song_id: 2})
gpl3 = PlaylistContent.create({playlist_id: 1, song_id: 3})
gpl4 = PlaylistContent.create({playlist_id: 1, song_id: 4})
gpl5 = PlaylistContent.create({playlist_id: 1, song_id: 5})

cm1 = Comment.create({user_id: 2, song_id: 4, parent_id: nil, body:"sick track"})
cm1 = Comment.create({user_id: 5, song_id: 4, parent_id: 1, body:"It's even better live"})
cm1 = Comment.create({user_id: 10, song_id: 4, parent_id: nil, body:"this song is filthier than the mold growing in my kitchen lmaoooo"})
