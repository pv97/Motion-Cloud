# Motion Cloud

[Production link][production]

[production]: http://www.motioncloud.us

##Description

This site aims to be a hybrid of SoundCloud and Youtube. MotionCloud allows users to seamlessly watch videos and post comments even during page navigation, searching for videos to add to queue, and browsing profiles. Meta data such as current playing video / videos in queue, are saved in query strings in the url. Thus users will not loose their video/queues on refresh, and can share videos to friends via url.

##Technology Stack

| Area               | Software      |
| ---------------    |:-------------:|
| Frontend           | React / Redux |
| Backend            | Rails         |
| Hosting      		   | Heroku        |
| Database Server	   | Cloudinary    |
| Repo      		     | GitHub        |
| CSS assist 		     | Material UI   |

##Features

###Home Page

Displays featured channels and 16 of the latest videos.
![logo.png](http://res.cloudinary.com/tlcoy4e3/image/upload/v1478887590/app_page_yd9uef.png)

####Search Bar

The search bar allows search video names. The search dispatches a ajax request to the search method in the video controller. The search performs a simple where query for video titles with matching substrings ignoring case.

####Nav Bar

The nav bar allows users to navigate to their profile page, upload page, and logout.

__________

###Global player

Video overlay is designed and built from scratch using react. Upon clicking on any video, a player pops up from the left. The player persists across page navigation. The player is always conditionally rendered according to presence of id=# in the url's query string. If there exists an id=#, the video player is rendered, if not, an empty position fixed div is rendered.

The when the video player is rendered, an inline dummy div of equal width is also rendered, which serves to push the page content to the right.

The video player keeps track of internal state of minimized=boolean and showQueue=boolean. Additionally show comments is handled in the query string. These booleans are conditions to decide class names of various divs of the video player.
![logo.png](http://res.cloudinary.com/tlcoy4e3/image/upload/v1478887583/video_overlay_fqgtwm.png)

__________

###Profile Page

Shows a list of user's videos and user's comments. This information is contained inside the user slice of the state.
![logo.png](http://res.cloudinary.com/tlcoy4e3/image/upload/v1478888365/user-page_vwify5.png)

__________

###Upload Page

Allows users to drag and drop to upload videos. Videos require a title and uploaded video. Uploaded videos are sent to the Cloudinary server, and video urls in database point to the Cloudinary server's video url.
![logo.png](http://res.cloudinary.com/tlcoy4e3/image/upload/v1478887563/upload_gtqzxd.png)

__________

###Query string

Currently playing video ID/ queued video IDs are kept in query string. Throughout the application, any request to play videos merely push or replace the hashHistory with updated query strings. The video overlay listens to this change and calls updates to the query state if such changes are made. The query state allows the video overlay to determine if updates should be made.
![logo.png](http://res.cloudinary.com/tlcoy4e3/image/upload/v1478889008/url_t3zftb.png)

__________

Developed by [Pysith Vanuptikul](https://www.linkedin.com/in/pivanup)
