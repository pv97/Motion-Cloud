# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create!({username:"Guest",password:"password"})
User.create!({username:"Kurzgesagt",password:"password"})
User.create!({username:"videogamedunkey",password:"password"})
User.create!({username:"Vsauce",password:"password"})

User.create!({username:"firstCommenter2000",password:"password"}) #5
User.create!({username:"username12",password:"password"}) #6
User.create!({username:"null; DROP USERS TABLE;",password:"password"}) #7
User.create!({username:"Batman",password:"password"}) #8
User.create!({username:"doge",password:"password"}) #9

User.create!({username:"PBS Space Time",password:"password"}) #10

Video.create!({
  url:"http://res.cloudinary.com/tlcoy4e3/video/upload/v1478141038/fjbplm92cb48efhlqcss.webm",
  thumbnail_url:"http://res.cloudinary.com/tlcoy4e3/video/upload/w_300,h_180/v1478141038/fjbplm92cb48efhlqcss.jpg",
  title:"How Far Will We Go?",
  description:"Original video at https://www.youtube.com/watch?v=ZL4yYHdDSWs",
  user_id:2,
  view_count:rand(10000000)
  })
Video.create!({
  url:"http://res.cloudinary.com/tlcoy4e3/video/upload/v1478368768/otgny75aqqny6bvthk6q.mkv",
  thumbnail_url:"http://res.cloudinary.com/tlcoy4e3/video/upload/w_300,h_180/v1478368768/otgny75aqqny6bvthk6q.jpg",
  title:"Atoms As Big As Mountains — Neutron Stars Explained",
  description: "Original at https://www.youtube.com/watch?v=ZW3aV7U-aik",
  user_id:2,
  view_count:rand(10000000)
  })
Video.create!({
  url: "http://res.cloudinary.com/tlcoy4e3/video/upload/v1478368945/xeuvr4cdm9mpoqmdqmty.webm",
  thumbnail_url:"http://res.cloudinary.com/tlcoy4e3/video/upload/w_300,h_180/v1478368945/xeuvr4cdm9mpoqmdqmty.jpg",
  title:"What is Light?",
  description: "Original at https://www.youtube.com/watch?v=IXxZRZxafEQ",
  user_id:2,
  view_count:rand(10000000)
  })
Video.create!({
  url: "http://res.cloudinary.com/tlcoy4e3/video/upload/v1478582136/xudbxw2s2olcm4ktyx47.webm",
  thumbnail_url:"http://res.cloudinary.com/tlcoy4e3/video/upload/w_300,h_180/v1478582136/xudbxw2s2olcm4ktyx47.jpg",
  title:"How The Stock Exchange Works (For Dummies)",
  description: "Original at https://www.youtube.com/watch?v=F3QpgXBtDeo",
  user_id:2,
  view_count:rand(10000000)
  })
Video.create!({
  url: "https://www.youtube.com/watch?v=7UNLgPIiWAg",
  thumbnail_url:"https://i.ytimg.com/vi/7UNLgPIiWAg/hqdefault.jpg",
  title:"Did Dark Energy Just Disappear?",
  description: "Original at https://www.youtube.com/watch?v=7UNLgPIiWAg",
  user_id:10,
  view_count:rand(10000000)
  })
Video.create!({
  url: "http://res.cloudinary.com/tlcoy4e3/video/upload/v1478369051/vyzosn1ymlet7lykfyev.mkv",
  thumbnail_url:"http://res.cloudinary.com/tlcoy4e3/video/upload/w_300,h_180/v1478369051/vyzosn1ymlet7lykfyev.jpg",
  title:"Chopin Nocturne No. 20 perf. by Wladyslaw Szpilman - 'The Pianist' - Original Recording",
  description: "Original at https://www.youtube.com/watch?v=n9oQEa-d5rU",
  user_id:1,
  view_count:rand(10000000)
  })
Video.create!({
  url: "http://res.cloudinary.com/tlcoy4e3/video/upload/v1478369182/pi4nduhz9yiiqfscmgwc.mkv",
  thumbnail_url:"http://res.cloudinary.com/tlcoy4e3/video/upload/w_300,h_180/v1478369182/pi4nduhz9yiiqfscmgwc.jpg",
  title:"Debussy, Clair de lune (piano music)",
  description: "Original at https://www.youtube.com/watch?v=LlvUepMa31o",
  user_id:1,
  view_count:rand(10000000)
  })
Video.create!({
  url: "https://www.youtube.com/watch?v=s86-Z-CbaHA",
  thumbnail_url:"https://i.ytimg.com/vi/s86-Z-CbaHA/hqdefault.jpg",
  title: "The Banach–Tarski Paradox",
  description: "Original at https://www.youtube.com/watch?v=s86-Z-CbaHA",
  user_id:4,
  view_count:rand(10000000)
  })
Video.create!({
  url: "http://res.cloudinary.com/tlcoy4e3/video/upload/v1478369490/brthtgondouisur7fqkn.mp4",
  thumbnail_url:"http://res.cloudinary.com/tlcoy4e3/video/upload/w_300,h_180/v1478369490/brthtgondouisur7fqkn.jpg",
  title: "Caste In the Sky Theme",
  description: "Original at https://www.youtube.com/watch?v=bvnA62FOECg",
  user_id:1,
  view_count:rand(10000000)
  })
Video.create!({
  url: "http://res.cloudinary.com/tlcoy4e3/video/upload/v1478369790/chzwyptwcd43ddl6pq1k.mkv",
  thumbnail_url:"http://res.cloudinary.com/tlcoy4e3/video/upload/w_300,h_180/v1478369790/chzwyptwcd43ddl6pq1k.jpg",
  title: "Princess Mononoke Main Theme",
  description: "Original at https://www.youtube.com/watch?v=nBADF1LdP3g",
  user_id:1,
  view_count:rand(10000000)
  })
Video.create!({
  url: "http://res.cloudinary.com/tlcoy4e3/video/upload/v1478369921/mioxqkgs8q3mtrxwe1kt.mkv",
  thumbnail_url:"http://res.cloudinary.com/tlcoy4e3/video/upload/w_300,h_180/v1478369921/mioxqkgs8q3mtrxwe1kt.jpg",
  title: "TheFellowshipoftheRingST-17-The Breaking of the Fellowship",
  description: "Original at https://www.youtube.com/watch?v=sQ9NOV3KNpY",
  user_id:1,
  view_count:rand(10000000)
  })
Video.create!({
  url: "http://res.cloudinary.com/tlcoy4e3/video/upload/v1478371275/vc07xcdkxnbada27kxgj.mp4",
  thumbnail_url: "http://res.cloudinary.com/tlcoy4e3/video/upload/w_300,h_180/v1478371275/vc07xcdkxnbada27kxgj.jpg",
  title: "One Second Video - for testing",
  description: "Just for tests",
  user_id:1,
  view_count:rand(10000000)
  })
Video.create!({
  url: "http://res.cloudinary.com/tlcoy4e3/video/upload/v1478369678/pzcfx7bighyuy86x5tsu.webm",
  thumbnail_url: "http://res.cloudinary.com/tlcoy4e3/video/upload/w_300,h_180/v1478369678/pzcfx7bighyuy86x5tsu.jpg",
  title: "Spirited Away - One Summer's Day",
  description: "Original at https://www.youtube.com/watch?v=smn0HOvwoZ8",
  user_id:1,
  view_count:rand(10000000)
  })
Video.create!({
  url: "http://res.cloudinary.com/tlcoy4e3/video/upload/v1478389781/pnvsquhd7qtfd4afw63v.mkv",
  thumbnail_url: "http://res.cloudinary.com/tlcoy4e3/video/upload/w_300,h_180/v1478389781/pnvsquhd7qtfd4afw63v.jpg",
  title: "Pokemon TV Anime Best 1997-2010 - Route 4",
  description: "Original at https://www.youtube.com/watch?v=stWae6r7Blw",
  user_id:1,
  view_count:rand(10000000)
  })
Video.create!({
  url: "https://www.youtube.com/watch?v=q6yHoSvrTss",
  thumbnail_url: "https://i.ytimg.com/vi/q6yHoSvrTss/hqdefault.jpg",
  title: "Ultimate Skyrim",
  description: "Original at https://www.youtube.com/watch?v=q6yHoSvrTss",
  user_id:3,
  view_count:rand(10000000)
  })
Video.create!({
  url: "http://res.cloudinary.com/tlcoy4e3/video/upload/v1478629370/Dark_Souls_3_OST_Main_Theme_qzbdo3.webm",
  thumbnail_url: "http://res.cloudinary.com/tlcoy4e3/video/upload/w_300,h_180/v1478629370/Dark_Souls_3_OST_Main_Theme_qzbdo3.jpg",
  title: "Dark Souls 3 OST Main Theme",
  description: "Original at https://www.youtube.com/watch?v=a0X0YA6ZfW4",
  user_id:1,
  view_count:rand(10000000)
  })
Video.create!({
  url: "http://res.cloudinary.com/tlcoy4e3/video/upload/v1478390467/wcfshijkad06qyocsqwe.mkv",
  thumbnail_url: "http://res.cloudinary.com/tlcoy4e3/video/upload/w_300,h_180/v1478390467/wcfshijkad06qyocsqwe.jpg",
  title: "The Fellowship of the Ring Soundtrack-02-Concerning Hobbits",
  description: "Original at https://www.youtube.com/watch?v=stWae6r7Blw",
  user_id:1,
  view_count:rand(10000000)
  })
Video.create!({
  url: "http://res.cloudinary.com/tlcoy4e3/video/upload/v1478369346/l0xpdvivkqe8ou3fh54m.mkv",
  thumbnail_url:"http://res.cloudinary.com/tlcoy4e3/video/upload/w_300,h_180/v1478369346/l0xpdvivkqe8ou3fh54m.jpg",
  title: "Howl's Moving Castle Main Theme",
  description: "Original at https://www.youtube.com/watch?v=owddukdxFv4",
  user_id:1,
  view_count:rand(10000000)
  })
Video.create!({
  url: "http://res.cloudinary.com/tlcoy4e3/video/upload/v1478582629/tuon0634h1m2aqgbsaa9.mp4",
  thumbnail_url:"http://res.cloudinary.com/tlcoy4e3/video/upload/w_300,h_180/v1478582629/tuon0634h1m2aqgbsaa9.jpg",
  title:"How Big is the Moon MM#1",
  description: "Original at https://www.youtube.com/watch?v=Tqt9hZcWhJM",
  user_id:2,
  view_count:rand(10000000)
  })
# youtube
# Kurzgesagt
Video.create!({
  url: "https://www.youtube.com/watch?v=mZsaaturR6E",
  thumbnail_url:"https://i.ytimg.com/vi/mZsaaturR6E/hqdefault.jpg",
  title:"Fusion Energy Explained – Future or Failure",
  description: "Original at https://www.youtube.com/watch?v=mZsaaturR6E",
  user_id:2,
  view_count:rand(10000000)
  })
Video.create!({
  url: "https://www.youtube.com/watch?v=ijFm6DxNVyI",
  thumbnail_url:"https://i.ytimg.com/vi/ijFm6DxNVyI/hqdefault.jpg",
  title:"The Most Efficient Way to Destroy the Universe – False Vacuum",
  description: "Original at https://www.youtube.com/watch?v=ijFm6DxNVyI",
  user_id:2,
  view_count:rand(10000000)
  })
Video.create!({
  url: "https://www.youtube.com/watch?v=TnzcwTyr6cE",
  thumbnail_url:"https://i.ytimg.com/vi/TnzcwTyr6cE/hqdefault.jpg",
  title:"How To Eradicate One Of Our Deadliest Enemies – Gene Drive & Malaria",
  description: "Original at https://www.youtube.com/watch?v=TnzcwTyr6cE",
  user_id:2,
  view_count:rand(10000000)
  })
Video.create!({
  url: "https://www.youtube.com/watch?v=jAhjPd4uNFY",
  thumbnail_url:"https://i.ytimg.com/vi/jAhjPd4uNFY/hqdefault.jpg",
  title:"Genetic Engineering Will Change Everything Forever – CRISPR",
  description: "Original at https://www.youtube.com/watch?v=jAhjPd4uNFY",
  user_id:2,
  view_count:rand(10000000)
  })
Video.create!({
  url: "https://www.youtube.com/watch?v=RLykC1VN7NY",
  thumbnail_url:"https://i.ytimg.com/vi/RLykC1VN7NY/hqdefault.jpg",
  title:"Death From Space — Gamma-Ray Bursts Explained",
  description: "Original at https://www.youtube.com/watch?v=RLykC1VN7NY",
  user_id:2,
  view_count:rand(10000000)
  })
Video.create!({
  url: "https://www.youtube.com/watch?v=qPQQwqGWktE",
  thumbnail_url:"https://i.ytimg.com/vi/qPQQwqGWktE/hqdefault.jpg",
  title:"Space Elevator – Science Fiction or the Future of Mankind?",
  description: "Original at https://www.youtube.com/watch?v=qPQQwqGWktE",
  user_id:2,
  view_count:rand(10000000)
  })
Video.create!({
  url: "https://www.youtube.com/watch?v=JhHMJCUmq28",
  thumbnail_url:"https://i.ytimg.com/vi/JhHMJCUmq28/hqdefault.jpg",
  title:"Quantum Computers Explained – Limits of Human Technology",
  description: "Original at https://www.youtube.com/watch?v=JhHMJCUmq28",
  user_id:2,
  view_count:rand(10000000)
  })
Video.create!({
  url: "https://www.youtube.com/watch?v=sNhhvQGsMEc",
  thumbnail_url:"https://i.ytimg.com/vi/sNhhvQGsMEc/hqdefault.jpg",
  title:"The Fermi Paradox — Where Are All The Aliens? (1/2)",
  description: "Original at https://www.youtube.com/watch?v=sNhhvQGsMEc",
  user_id:2,
  view_count:rand(10000000)
  })
Video.create!({
  url: "https://www.youtube.com/watch?v=1fQkVqno-uI",
  thumbnail_url:"https://i.ytimg.com/vi/1fQkVqno-uI/hqdefault.jpg",
  title:"The Fermi Paradox II — Solutions and Ideas – Where Are All The Aliens?",
  description: "Original at https://www.youtube.com/watch?v=1fQkVqno-uI",
  user_id:2,
  view_count:rand(10000000)
  })
Video.create!({
  url: "https://www.youtube.com/watch?v=8nHBGFKLHZQ",
  thumbnail_url:"https://i.ytimg.com/vi/8nHBGFKLHZQ/hqdefault.jpg",
  title:"What if there was a black hole in your pocket?",
  description: "Original at https://www.youtube.com/watch?v=8nHBGFKLHZQ",
  user_id:2,
  view_count:rand(10000000)
  })
Video.create!({
  url: "https://www.youtube.com/watch?v=dGiQaabX3_o",
  thumbnail_url:"https://i.ytimg.com/vi/dGiQaabX3_o/hqdefault.jpg",
  title:"What Happened Before History? Human Origins",
  description: "Original at https://www.youtube.com/watch?v=dGiQaabX3_o",
  user_id:2,
  view_count:rand(10000000)
  })
Video.create!({
  url: "https://www.youtube.com/watch?v=LS-VPyLaJFM",
  thumbnail_url:"https://i.ytimg.com/vi/LS-VPyLaJFM/hqdefault.jpg",
  title:"The Last Star in the Universe – Red Dwarfs Explained",
  description: "Original at https://www.youtube.com/watch?v=LS-VPyLaJFM",
  user_id:2,
  view_count:rand(10000000)
  })
#dunkey
Video.create!({
  url: "https://www.youtube.com/watch?v=z55rJznqF3E",
  thumbnail_url:"https://i.ytimg.com/vi/z55rJznqF3E/hqdefault.jpg",
  title:"Virtual Dunkey",
  description: "Original at https://www.youtube.com/watch?v=z55rJznqF3E",
  user_id:3,
  view_count:rand(10000000)
  })
Video.create!({
  url: "https://www.youtube.com/watch?v=4Cr6QNQkk3o",
  thumbnail_url:"https://i.ytimg.com/vi/4Cr6QNQkk3o/hqdefault.jpg",
  title:"Operation Teemo",
  description: "Original at https://www.youtube.com/watch?v=4Cr6QNQkk3o",
  user_id:3,
  view_count:rand(10000000)
  })
Video.create!({
  url: "https://www.youtube.com/watch?v=KtglAQCxUIk",
  thumbnail_url:"https://i.ytimg.com/vi/KtglAQCxUIk/hqdefault.jpg",
  title:"Just Guy 3 : Cable Guy",
  description: "Original at https://www.youtube.com/watch?v=KtglAQCxUIk",
  user_id:3,
  view_count:rand(10000000)
  })
Video.create!({
  url: "https://www.youtube.com/watch?v=9g3CjQv5yec",
  thumbnail_url:"https://i.ytimg.com/vi/9g3CjQv5yec/hqdefault.jpg",
  title:"Silent Hill 2",
  description: "Original at https://www.youtube.com/watch?v=9g3CjQv5yec",
  user_id:3,
  view_count:rand(10000000)
  })
#vsauce
Video.create!({
  url: "https://www.youtube.com/watch?v=9rIy0xY99a0",
  thumbnail_url:"https://i.ytimg.com/vi/9rIy0xY99a0/hqdefault.jpg",
  title:"What is Random?",
  description: "Original at https://www.youtube.com/watch?v=9rIy0xY99a0",
  user_id:4,
  view_count:rand(10000000)
  })
Video.create!({
  url: "https://www.youtube.com/watch?v=4I5Q3UXkGd0",
  thumbnail_url:"https://i.ytimg.com/vi/4I5Q3UXkGd0/hqdefault.jpg",
  title:"What Is The Resolution Of The Eye?",
  description: "Original at https://www.youtube.com/watch?v=4I5Q3UXkGd0",
  user_id:4,
  view_count:rand(10000000)
  })
Video.create!({
  url: "https://www.youtube.com/watch?v=w-CK8VxMz9g",
  thumbnail_url:"https://i.ytimg.com/vi/w-CK8VxMz9g/hqdefault.jpg",
  title:"Risk.",
  description: "Original at https://www.youtube.com/watch?v=w-CK8VxMz9g",
  user_id:4,
  view_count:rand(10000000)
  })
Video.create!({
  url: "https://www.youtube.com/watch?v=Qig68IuPrbk",
  thumbnail_url:"https://i.ytimg.com/vi/Qig68IuPrbk/hqdefault.jpg",
  title:"last words",
  description: "Original at https://www.youtube.com/watch?v=Qig68IuPrbk",
  user_id:4,
  view_count:rand(10000000)
  })
Video.create!({
  url: "https://www.youtube.com/watch?v=7uiv6tKtoKg",
  thumbnail_url:"https://i.ytimg.com/vi/7uiv6tKtoKg/hqdefault.jpg",
  title:"What Will We Miss?",
  description: "Original at https://www.youtube.com/watch?v=7uiv6tKtoKg",
  user_id:4,
  view_count:rand(10000000)
  })
Video.create!({
  url: "https://www.youtube.com/watch?v=4fuHzC9aTik",
  thumbnail_url:"https://i.ytimg.com/vi/4fuHzC9aTik/hqdefault.jpg",
  title:"How Hot Can It Get?",
  description: "Original at https://www.youtube.com/watch?v=4fuHzC9aTik",
  user_id:4,
  view_count:rand(10000000)
  })
Video.create!({
  url: "https://www.youtube.com/watch?v=GJ4Qp2xeRds",
  thumbnail_url:"https://i.ytimg.com/vi/GJ4Qp2xeRds/hqdefault.jpg",
  title:"How High Can We Build?",
  description: "Original at https://www.youtube.com/watch?v=GJ4Qp2xeRds",
  user_id:4,
  view_count:rand(10000000)
  })
Video.create!({
  url: "https://www.youtube.com/watch?v=csInNn6pfT4",
  thumbnail_url:"https://i.ytimg.com/vi/csInNn6pfT4/hqdefault.jpg",
  title:"Fixed Points",
  description: "Original at https://www.youtube.com/watch?v=csInNn6pfT4",
  user_id:4,
  view_count:rand(10000000)
  })
Video.create!({
  url: "https://www.youtube.com/watch?v=Ks8WH3xUo_E",
  thumbnail_url:"https://i.ytimg.com/vi/Ks8WH3xUo_E/hqdefault.jpg",
  title:"Who Owns The Moon?",
  description: "Original at https://www.youtube.com/watch?v=Ks8WH3xUo_E",
  user_id:4,
  view_count:rand(10000000)
  })
Video.create!({
  url: "https://www.youtube.com/watch?v=zRP82omMX0g",
  thumbnail_url:"https://i.ytimg.com/vi/zRP82omMX0g/hqdefault.jpg",
  title:"INSIDE a Spherical Mirror",
  description: "Original at https://www.youtube.com/watch?v=zRP82omMX0g",
  user_id:4,
  view_count:rand(10000000)
  })
Video.create!({
  url: "https://www.youtube.com/watch?v=K0-GxoJ_Pcg",
  thumbnail_url:"https://i.ytimg.com/vi/K0-GxoJ_Pcg/hqdefault.jpg",
  title:"What If The Earth Stopped Spinning?",
  description: "Original at https://www.youtube.com/watch?v=K0-GxoJ_Pcg",
  user_id:4,
  view_count:rand(10000000)
  })
#pbs space time
Video.create!({
  url: "https://www.youtube.com/watch?v=dzKWfw68M5U",
  thumbnail_url:"https://i.ytimg.com/vi/dzKWfw68M5U/hqdefault.jpg",
  title:"The Many Worlds of the Quantum Multiverse",
  description: "Original at https://www.youtube.com/watch?v=dzKWfw68M5U",
  user_id:10,
  view_count:rand(10000000)
  })
Video.create!({
  url: "https://www.youtube.com/watch?v=ZY47bVu-0Bs",
  thumbnail_url:"https://i.ytimg.com/vi/ZY47bVu-0Bs/hqdefault.jpg",
  title:"Quantum Vortices and Superconductivity + Challenge Answers",
  description: "Original at https://www.youtube.com/watch?v=ZY47bVu-0Bs",
  user_id:10,
  view_count:rand(10000000)
  })
Video.create!({
  url: "https://www.youtube.com/watch?v=jW55cViXu6s",
  thumbnail_url:"https://i.ytimg.com/vi/jW55cViXu6s/hqdefault.jpg",
  title:"Should We Build a Dyson Sphere?",
  description: "Original at https://www.youtube.com/watch?v=jW55cViXu6s",
  user_id:10,
  view_count:rand(10000000)
  })
Video.create!({
  url: "https://www.youtube.com/watch?v=2Uzytrooz44",
  thumbnail_url:"https://i.ytimg.com/vi/2Uzytrooz44/hqdefault.jpg",
  title:"Quantum Eraser Lottery Challenge",
  description: "Original at https://www.youtube.com/watch?v=2Uzytrooz44",
  user_id:10,
  view_count:rand(10000000)
  })
Video.create!({
  url: "https://www.youtube.com/watch?v=8ORLN_KwAgs",
  thumbnail_url:"https://i.ytimg.com/vi/8ORLN_KwAgs/hqdefault.jpg",
  title:"How the Quantum Eraser Rewrites the Past",
  description: "Original at https://www.youtube.com/watch?v=8ORLN_KwAgs",
  user_id:10,
  view_count:rand(10000000)
  })
Video.create!({
  url: "https://www.youtube.com/watch?v=eJ2RNBAFLj0",
  thumbnail_url:"https://i.ytimg.com/vi/eJ2RNBAFLj0/hqdefault.jpg",
  title:"The Future of Gravitational Waves",
  description: "Original at https://www.youtube.com/watch?v=eJ2RNBAFLj0",
  user_id:10,
  view_count:rand(10000000)
  })
Video.create!({
  url: "https://www.youtube.com/watch?v=-IfmgyXs7z8",
  thumbnail_url:"https://i.ytimg.com/vi/-IfmgyXs7z8/hqdefault.jpg",
  title:"Is Quantum Tunneling Faster than Light?",
  description: "Original at https://www.youtube.com/watch?v=-IfmgyXs7z8",
  user_id:10,
  view_count:rand(10000000)
  })
Video.create!({
  url: "https://www.youtube.com/watch?v=xZTb6sfHEX8",
  thumbnail_url:"https://i.ytimg.com/vi/xZTb6sfHEX8/hqdefault.jpg",
  title:"Will the Universe Expand Forever?",
  description: "Original at https://www.youtube.com/watch?v=xZTb6sfHEX8",
  user_id:10,
  view_count:rand(10000000)
  })
Video.create!({
  url: "https://www.youtube.com/watch?v=nFYveYkSPuA",
  thumbnail_url:"https://i.ytimg.com/vi/nFYveYkSPuA/hqdefault.jpg",
  title:"Pulsar Starquakes Make Fast Radio Bursts? + Challenge Winners!",
  description: "Original at https://www.youtube.com/watch?v=nFYveYkSPuA",
  user_id:10,
  view_count:rand(10000000)
  })



(1..55).each do |i|
  Comment.create!({user_id:5,video_id:i,body:"first"})
end

(1..55).each do |i|
  Comment.create!({user_id:7,video_id:i,body:
    "#{Faker::Hacker.noun} #{Faker::Hacker.verb} #{Faker::Hacker.adjective} #{Faker::Hacker.verb}"})
end

(1..55).each do |i|
  Comment.create!({user_id:rand(5..9),video_id:i,body:"#{Faker::Company.bs}"})
end

(1..55).each do |i|
  Comment.create!({user_id:rand(5..9),video_id:i,parent_comment_id:(i*rand(1..3)),
    body:"#{Faker::Company.bs}"})
end

(1..55).each do |i|
  Comment.create!({user_id:rand(5..9),video_id:i,parent_comment_id:(i*rand(1..3)),
    body:"#{Faker::Company.bs}"})
end
