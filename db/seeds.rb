Clip.destroy_all



puts "seeding clips"
c1 = Clip.create(name:"clip1", video_url:"/clip1.mov" )
c2 = Clip.create(name:"clip2", video_url:"/clip2.mov" )
c3 = Clip.create(name:"clip3", video_url:"/clip3.mov" )

