# Motion Cloud

[Production link][production]

[production]: http://www.motioncloud.us

##Description

This site aims to be a hybrid of SoundCloud and Youtube. MotionCloud allows users to seamlessly watch videos and post comments even during page navigation, searching for videos to add to queue, and browsing profiles. Meta data such as current playing video / videos in queue, are saved in query strings in the url. Thus users will not loose their video/queues on refresh, and can share videos to friends via url.

##Technology Stack

| Area               | Software      |
| ---------------    |:-------------:|
| Frontend           | React / Redux |
| Backend            | Rails 5.0     |
| Hosting      		   | Heroku        |
| Database Server	   | Cloudinary    |
| Repo      		     | GitHub        |
| CSS assist 		     | Material UI   |

##Features

###Home Page

Displays featured channels and 16 of the latest videos.
![logo.png](http://res.cloudinary.com/tlcoy4e3/image/upload/v1478887590/app_page_yd9uef.png)

####Search Bar

The search bar allows search video names.
![logo.png](http://res.cloudinary.com/tlcoy4e3/image/upload/v1478887760/search_ivrgsy.png)

####Nav Bar

The nav bar allows users to navigate to their profile page, upload page, and logout.
![logo.png](http://res.cloudinary.com/tlcoy4e3/image/upload/v1478888244/logged-in_hjga5x.png)

__________

###Global player

Video overlay is designed and built from scratch using react. Upon clicking on any video, a player pops up from the left. The player persists across page navigation.
![logo.png](http://res.cloudinary.com/tlcoy4e3/image/upload/v1478887583/video_overlay_fqgtwm.png)

Clicking the SHOW QUEUE reveals videos added to queue, if any
![logo.png](http://res.cloudinary.com/tlcoy4e3/image/upload/v1478888153/video-queue_hz0rwy.png)

Clicking the SHOW COMMENTS banner, the player slides right, revealing comments belonging to the video
![logo.png](http://res.cloudinary.com/tlcoy4e3/image/upload/v1478887583/video_overlay_fqgtwm.png)

Player can be minimized to ease navigation
![logo.png](http://res.cloudinary.com/tlcoy4e3/image/upload/v1478887568/minimized_yarxlq.png)

__________

###Profile Page

Shows a list of user's videos
![logo.png](http://res.cloudinary.com/tlcoy4e3/image/upload/v1478888365/user-page_vwify5.png)

and user's comments
![logo.png](http://res.cloudinary.com/tlcoy4e3/image/upload/v1478888425/user-comments_e5yqsf.png)

__________

###Upload Page

Allows users to drag and drop to upload videos. Videos require a title and uploaded video. Uploaded videos are sent to the Cloudinary server, and video urls in database point to the Cloudinary server's video url.
![logo.png](http://res.cloudinary.com/tlcoy4e3/image/upload/v1478887563/upload_gtqzxd.png)

__________

###Query string

Currently playing video ID/ queued video IDs are kept in query string
![logo.png](http://res.cloudinary.com/tlcoy4e3/image/upload/v1478889008/url_t3zftb.png)

__________

Developed by [Pysith Vanuptikul](https://www.linkedin.com/in/pivanup)
