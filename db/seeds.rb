# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

#-----------------USERS---------------
guest = User.create({username: "Guest", password: "password", email:"guest@example.com", description: "A humble guest", profile_url: ""})
ben = User.create({username: "Quarks0", password: "2malfor9", email:"Bdippelsman10@gmail.com", description: "Strangely charming", profile_url: ""})
tonia = User.create({username: "Toniahsia", password: "ilovecats", email:"Catluver94@cats.com", description: "I'm such a dork", profile_url: ""})
michael = User.create({username: "Toopak", password: "pakout", email:"Mpak@smentertainment.com", description: "How am I so beautiful?", profile_url: ""})
connor = User.create({username: "Monnorcurphy", password: "therealOG", email:"Connor@murphy.com", description: "The glue that holds friends together", profile_url: ""})
cindy = User.create({username: "Illestoftheill", password: "nmjcu", email:"cindy@wang.com", description: "wheres my mug", profile_url: ""})
shaurya = User.create({username: "Iamgod", password: "IAMGOD", email:"god@god.com", description: "It's so easy dude", profile_url: ""})
humza = User.create({username: "Houstonballer", password: "houstonrepresent", email: "humza@baig.com", description: "sup", profile_url: ""})
will = User.create({username: "Weeum", password: "password", email:"will@dippelsman.com", description:"I wasn't paying attention", profile_url: ""})
nick = User.create({username: "Minus", password: "password", email:"will@dippelsman.com", description:"oops", profile_url: ""})

Song.create({title: "Brave", artist: "gLadiator", url: "http://res.cloudinary.com/duhmzsirt/video/upload/v1478675572/02_-_gLAdiator_-_Brave_feat._Vindata_Mothica_khycfx.mp3", image_url: "", user_id: 2})
Song.create({title: "Citi Bike", artist: "Lido", url: "http://res.cloudinary.com/duhmzsirt/video/upload/v1478382946/07_-_Citi_Bike_rivi53.mp3", image_url: "http://res.cloudinary.com/duhmzsirt/image/upload/v1478824104/cover_i29sdv.jpg", user_id: 3})
Song.create({title: "U Don't Know", artist: "Alison Wonderland", url: "http://res.cloudinary.com/duhmzsirt/video/upload/v1478281042/02_-_U_Don_t_Know_Feat._Wayne_Coyne_atkn5r.mp3", image_url: "http://res.cloudinary.com/duhmzsirt/image/upload/v1478885983/127cb0b92f2a98910cf6868e85d3ab97_rlzted.jpg", user_id: 4})
Song.create({title: "Wau", artist: "DJ Kitten ft Tonia", url: "http://res.cloudinary.com/duhmzsirt/video/upload/v1478576522/wau_gbindh.mp3", image_url: "", user_id: 3})
Song.create({title: "Wavy", artist: "Flosstradamus", url: "http://res.cloudinary.com/duhmzsirt/video/upload/v1478217334/06-Flosstradamus_NYMZ-Wavy_nnpouv.mp3", image_url: "http://res.cloudinary.com/duhmzsirt/image/upload/v1478885981/600x600bb_xf6y3j.jpg", user_id: 5})
Song.create({title: "Fairfax", artist: "gLadiator", url: "http://res.cloudinary.com/duhmzsirt/video/upload/v1478217290/01_-_gLAdiator_-_Fairfax_gg48yp.mp3", image_url: "", user_id: 6})
Song.create({title: "Drop Top", artist: "Flosstradamus", url: "http://res.cloudinary.com/duhmzsirt/video/upload/v1478218636/04-Flosstradamus-Drop_Top_ft._Travis_Porter_l0rdmv.mp3", image_url: "http://res.cloudinary.com/duhmzsirt/image/upload/v1478885981/600x600bb_xf6y3j.jpg", user_id: 2})
Song.create({title: "Dr Pepper", artist: "Various Artists", url: "http://res.cloudinary.com/duhmzsirt/video/upload/v1478675550/01_-_Doctor_Pepper_ejb5yu.mp3", image_url: "http://res.cloudinary.com/duhmzsirt/image/upload/v1478824081/folder_jtsby9.jpg", user_id: 6})
Song.create({title: "I Just Can't Deny", artist: "Keys N' Krates", url: "http://res.cloudinary.com/duhmzsirt/video/upload/v1478675507/01_I_Just_Can_t_Deny_sdmnwh.mp3", image_url: "http://res.cloudinary.com/duhmzsirt/image/upload/v1478824121/folder_t3thom.jpg", user_id: 7})
Song.create({title: "Hell", artist: "Mura Masa", url: "http://res.cloudinary.com/duhmzsirt/video/upload/v1478675466/10_-_Hell_ojtlkr.mp3", image_url: "", user_id: 2})
Song.create({title: "Naked", artist: "Alison Wonderland", url: "http://res.cloudinary.com/duhmzsirt/video/upload/v1478021319/04_-_Naked_Alison_Wonderland_x_Slumberjack_xztymm.mp3", image_url: "http://res.cloudinary.com/duhmzsirt/image/upload/v1478885983/127cb0b92f2a98910cf6868e85d3ab97_rlzted.jpg", user_id: 3})
Song.create({title: "Vultures", artist: "HVX", url:"http://res.cloudinary.com/duhmzsirt/video/upload/v1478752225/hclzipna8c7s0ayrkqor.mp3", image_url: "http://res.cloudinary.com/duhmzsirt/image/upload/v1478752534/bvr86pawhlihnsefm6s8.jpg", user_id: 2})

Comment.create({user_id: 2, song_id: 4, body: "Waaauuuu"})
Comment.create({user_id: 3, song_id: 4, body: "wau wau", parent_id: 1})
Comment.create({user_id: 6, song_id: 1, body: "sick"})
Comment.create({user_id: 4, song_id: 2, body: "this song is so angry but i love it"})
Comment.create({user_id: 2, song_id: 3, body: "hella"})
Comment.create({user_id: 8, song_id: 5, body: "chicago represent"})
Comment.create({user_id: 5, song_id: 6, body: "classic"})
Comment.create({user_id: 2, song_id: 7, body: "dope"})
