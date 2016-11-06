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
  thumbnail_url:"http://res.cloudinary.com/tlcoy4e3/video/upload/w_200,h_130/v1478141038/fjbplm92cb48efhlqcss.jpg",
  title:"How Far Will We Go?",
  description:"Original video at https://www.youtube.com/watch?v=ZL4yYHdDSWs",
  user_id:2
  })
Video.create!({
  url:"http://res.cloudinary.com/tlcoy4e3/video/upload/v1478368768/otgny75aqqny6bvthk6q.mkv",
  thumbnail_url:"http://res.cloudinary.com/tlcoy4e3/video/upload/w_200,h_130/v1478368768/otgny75aqqny6bvthk6q.jpg",
  title:"Atoms As Big As Mountains — Neutron Stars Explained",
  description: "Original at https://www.youtube.com/watch?v=ZW3aV7U-aik",
  user_id:2
  })
Video.create!({
  url: "http://res.cloudinary.com/tlcoy4e3/video/upload/v1478368945/xeuvr4cdm9mpoqmdqmty.webm",
  thumbnail_url:"http://res.cloudinary.com/tlcoy4e3/video/upload/w_200,h_130/v1478368945/xeuvr4cdm9mpoqmdqmty.jpg",
  title:"What is Light?",
  description: "Original at https://www.youtube.com/watch?v=IXxZRZxafEQ",
  user_id:2
  })
Video.create!({
  url: "http://res.cloudinary.com/tlcoy4e3/video/upload/v1478369051/vyzosn1ymlet7lykfyev.mkv",
  thumbnail_url:"http://res.cloudinary.com/tlcoy4e3/video/upload/w_200,h_130/v1478369051/vyzosn1ymlet7lykfyev.jpg",
  title:"Chopin Nocturne No. 20 perf. by Wladyslaw Szpilman - 'The Pianist' - Original Recording",
  description: "Original at https://www.youtube.com/watch?v=n9oQEa-d5rU",
  user_id:1
  })
Video.create!({
  url: "http://res.cloudinary.com/tlcoy4e3/video/upload/v1478369182/pi4nduhz9yiiqfscmgwc.mkv",
  thumbnail_url:"http://res.cloudinary.com/tlcoy4e3/video/upload/w_200,h_130/v1478369182/pi4nduhz9yiiqfscmgwc.jpg",
  title:"Debussy, Clair de lune (piano music)",
  description: "Original at https://www.youtube.com/watch?v=LlvUepMa31o",
  user_id:1
  })
Video.create!({
  url: "http://res.cloudinary.com/tlcoy4e3/video/upload/v1478369346/l0xpdvivkqe8ou3fh54m.mkv",
  thumbnail_url:"http://res.cloudinary.com/tlcoy4e3/video/upload/w_200,h_130/v1478369346/l0xpdvivkqe8ou3fh54m.jpg",
  title: "Howl's Moving Castle Main Theme",
  description: "Original at https://www.youtube.com/watch?v=owddukdxFv4",
  user_id:1
  })
Video.create!({
  url: "http://res.cloudinary.com/tlcoy4e3/video/upload/v1478369490/brthtgondouisur7fqkn.mp4",
  thumbnail_url:"http://res.cloudinary.com/tlcoy4e3/video/upload/w_200,h_130/v1478369490/brthtgondouisur7fqkn.jpg",
  title: "Caste In the Sky Theme",
  description: "Original at https://www.youtube.com/watch?v=bvnA62FOECg",
  user_id:1
  })
Video.create!({
  url: "http://res.cloudinary.com/tlcoy4e3/video/upload/v1478369790/chzwyptwcd43ddl6pq1k.mkv",
  thumbnail_url:"http://res.cloudinary.com/tlcoy4e3/video/upload/w_200,h_130/v1478369790/chzwyptwcd43ddl6pq1k.jpg",
  title: "Princess Mononoke Main Theme",
  description: "Original at https://www.youtube.com/watch?v=nBADF1LdP3g",
  user_id:1
  })
Video.create!({
  url: "http://res.cloudinary.com/tlcoy4e3/video/upload/v1478369921/mioxqkgs8q3mtrxwe1kt.mkv",
  thumbnail_url:"http://res.cloudinary.com/tlcoy4e3/video/upload/w_200,h_130/v1478369921/mioxqkgs8q3mtrxwe1kt.jpg",
  title: "TheFellowshipoftheRingST-17-The Breaking of the Fellowship",
  description: "Original at https://www.youtube.com/watch?v=sQ9NOV3KNpY",
  user_id:1
  })
Video.create!({
  url: "http://res.cloudinary.com/tlcoy4e3/video/upload/v1478371275/vc07xcdkxnbada27kxgj.mp4",
  thumbnail_url: "http://res.cloudinary.com/tlcoy4e3/video/upload/w_200,h_130/v1478371275/vc07xcdkxnbada27kxgj.jpg",
  title: "One Second Video",
  description: "",
  user_id:1
  })
Video.create!({
  url: "http://res.cloudinary.com/tlcoy4e3/video/upload/v1478369678/pzcfx7bighyuy86x5tsu.webm",
  thumbnail_url: "http://res.cloudinary.com/tlcoy4e3/video/upload/w_200,h_130/v1478369678/pzcfx7bighyuy86x5tsu.jpg",
  title: "Spirited Away - One Summer's Day",
  description: "Original at https://www.youtube.com/watch?v=smn0HOvwoZ8",
  user_id:1
  })
Video.create!({
  url: "http://res.cloudinary.com/tlcoy4e3/video/upload/v1478389464/rrgsys5vie5luqzifaah.avi",
  thumbnail_url: "http://res.cloudinary.com/tlcoy4e3/video/upload/w_200,h_130/v1478389464/rrgsys5vie5luqzifaah.jpg",
  title: "Dark Souls 3 Menu Theme",
  description: "Original at https://www.youtube.com/watch?v=stWae6r7Blw",
  user_id:1
  })
Video.create!({
  url: "http://res.cloudinary.com/tlcoy4e3/video/upload/v1478389781/pnvsquhd7qtfd4afw63v.mkv",
  thumbnail_url: "http://res.cloudinary.com/tlcoy4e3/video/upload/w_200,h_130/v1478389781/pnvsquhd7qtfd4afw63v.jpg",
  title: "Pokemon TV Anime Best 1997-2010 - Route 4",
  description: "Original at https://www.youtube.com/watch?v=stWae6r7Blw",
  user_id:1
  })
Video.create!({
  url: "http://res.cloudinary.com/tlcoy4e3/video/upload/v1478390467/wcfshijkad06qyocsqwe.mkv",
  thumbnail_url: "http://res.cloudinary.com/tlcoy4e3/video/upload/w_200,h_130/v1478390467/wcfshijkad06qyocsqwe.jpg",
  title: "The Fellowship of the Ring Soundtrack-02-Concerning Hobbits",
  description: "Original at https://www.youtube.com/watch?v=stWae6r7Blw",
  user_id:1
  })
