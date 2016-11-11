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

![logo.png](https://cloudinary.com/console/media_library#/dialog/image/upload/app_page_yd9uef.png)
(image 1)

####Search Bar

The search bar allows search video names.
![logo.png](http://res.cloudinary.com/tlcoy4e3/image/upload/v1478887760/search_ivrgsy.png)
(image 6)

####Nav Bar

The nav bar allows users to navigate to their profile page, upload page, and
![logo.png](http://res.cloudinary.com/tlcoy4e3/image/upload/v1478888244/logged-in_hjga5x.png)
(image 7)

__________

###Global player

Upon clicking on any video, a player pops up from the left. The player persists across page navigation.
![logo.png](http://res.cloudinary.com/tlcoy4e3/image/upload/v1478887583/video_overlay_fqgtwm.png)
(image 2)

Clicking the SHOW QUEUE reveals videos added to queue, if any
![logo.png](http://res.cloudinary.com/tlcoy4e3/image/upload/v1478888153/video-queue_hz0rwy.png)
(image 3)

Clicking the SHOW COMMENTS banner, the player slides right, revealing comments belonging to the video
![logo.png](http://res.cloudinary.com/tlcoy4e3/image/upload/v1478887583/video_overlay_fqgtwm.png)
(image 4)

Player can be minimized to ease navigation
![logo.png](http://res.cloudinary.com/tlcoy4e3/image/upload/v1478887568/minimized_yarxlq.png)
(image 5)

__________

###Profile Page

Shows a list of user's videos
![logo.png](http://res.cloudinary.com/tlcoy4e3/image/upload/v1478888365/user-page_vwify5.png)
(image 8)

and user's comments
![logo.png](https://cloudinary.com/console/media_library#/dialog/image/upload/user-comments_e5yqsf)
(image 9)

__________

###Upload Page

Allows users to drag and drop to upload videos
![logo.png](https://cloudinary.com/console/media_library#/dialog/image/upload/upload_gtqzxd.png)
(image 10)

__________

###Query string

Currently playing video ID/ queued video IDs are kept in query string
![logo.png](http://res.cloudinary.com/tlcoy4e3/image/upload/v1478889008/url_t3zftb.png)
(image 11)

__________

Developed by [Pysith Vanuptikul](https://www.linkedin.com/in/pivanup)
