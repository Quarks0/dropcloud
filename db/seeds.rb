# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

#-----------------USERS---------------
ben = User.find_or_create_by([{username: "Quarks0", password: "2malfor9", email:"bdippelsman10@gmail.com")
tonia = User.find_or_create_by([{username: "toniahsia", password: "ilovecats", email:"catluver94@cats.com")
michael = User.find_or_create_by([{username: "toopak", password: "pakout", email:"mpak@smentertainment.com")
connor = User.find_or_create_by([{username: "monnorcurphy", password: "therealOG", email:"connor@murphy.com")
cindy = User.find_or_create_by([{username: "illestoftheill", password: "nmjcu", email:"cindy@wang.com")
shaurya = User.find_or_create_by([{username: "IAMGOD", password: "IAMBOD", email:"god@god.com")
guest = User.find_or_create_by([{username: "Guest", password: "password", email:"guest@example.com")
will = User.find_or_create_by([{username: "weeum", password: "password", email:"will@dippelsman.com")
nick = User.find_or_create_by([{username: "minus", password: "password", email:"will@dippelsman.com")


  # olaf = Contact.find_or_create_by(name: "Olaf", email: "olaf@frozen.com", user_id: anna.id)
  # sven = Contact.find_or_create_by(name: "Sven", email: "sven@frozen.com", user_id: anna.id)
  # hans = Contact.find_or_create_by(name: "Hans", email: "hans@frozen.com", user_id: anna.id)
  # ContactShare.find_or_create_by(user_id: elsa.id, contact_id: olaf.id)
  # ContactShare.find_or_create_by(user_id: elsa.id, contact_id: sven.id)
  # ContactShare.find_or_create_by(user_id: kristoff.id, contact_id: hans.id)
