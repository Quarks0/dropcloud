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
tonia = User.create({username: "Toniahsia", password: "ilovecats", email:"Catluver94@cats.com"})
michael = User.create({username: "Toopak", password: "pakout", email:"Mpak@smentertainment.com"})
connor = User.create({username: "Monnorcurphy", password: "therealOG", email:"Connor@murphy.com"})
cindy = User.create({username: "Illestoftheill", password: "nmjcu", email:"cindy@wang.com"})
shaurya = User.create({username: "Iamgod", password: "IAMGOD", email:"god@god.com"})
humza = User.create({username: "Houstonballer", password: "houstonrepresent", email: "humza@baig.com"})
will = User.create({username: "Weeum", password: "password", email:"will@dippelsman.com"})
nick = User.create({username: "Minus", password: "password", email:"will@dippelsman.com"})


  # olaf = Contact.find_or_create_by(name: "Olaf", email: "olaf@frozen.com", user_id: anna.id)
  # sven = Contact.find_or_create_by(name: "Sven", email: "sven@frozen.com", user_id: anna.id)
  # hans = Contact.find_or_create_by(name: "Hans", email: "hans@frozen.com", user_id: anna.id)
  # ContactShare.find_or_create_by(user_id: elsa.id, contact_id: olaf.id)
  # ContactShare.find_or_create_by(user_id: elsa.id, contact_id: sven.id)
  # ContactShare.find_or_create_by(user_id: kristoff.id, contact_id: hans.id)
