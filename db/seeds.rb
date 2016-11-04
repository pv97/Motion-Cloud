# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create!({username:"Guest",password:"password"})
User.create!({username:"Kurzgesagt",password:"password"})
Video.create!({
  url:"http://res.cloudinary.com/tlcoy4e3/video/upload/v1478141038/fjbplm92cb48efhlqcss.webm",
  thumbnail_url:"http://res.cloudinary.com/tlcoy4e3/video/upload/c_limit,h_60,w_90/v1478141038/fjbplm92cb48efhlqcss.jpg",
  title:"How Far Will We Go?",
  description:"",
  user_id:2
  })
