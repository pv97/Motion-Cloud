# Motion Cloud

[Production link][production]

[production]: http://www.motioncloud.us

##Description

This site aims to be a hybrid of SoundCloud and Youtube. MotionCloud allows users to seamlessly watch videos and post comments even during page navigation, searching for videos to add to queue, and browsing profiles. Meta data such as current playing video / videos in queue, are saved in query strings in the URL. Thus users will not loose their video/queues on refresh, and can share videos to friends via URL.

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

Displays featured channels and 16 of the latest uploaded videos.
![logo.png](http://res.cloudinary.com/tlcoy4e3/image/upload/v1478887590/app_page_yd9uef.png)

####Search Bar

The search bar allows search video names. The search dispatches a ajax request to the search method in the video controller. The search performs a simple where-query for video titles with matching substrings ignoring case. The results are pushed to a search slate in the state.

####Nav Bar

The nav bar allows users to navigate to their profile page, upload page, and logout.

__________

###Global player

Video overlay is designed and built from scratch using react redux. The goal set out for this player to satisfy various conditions. First, the video player must be able to be played anywhere across the application. Second, The player must not intrude over the usage of the application. Third, the video player should allow users to watch videos even if they decide to split their screen when they want to watch videos while using another program. Fourth, users should be able to access the video's comments from the player, and should still be able to watch the video while reading comments. Fifth, users should be able to see video queues somewhere in the player. Sixth, users should be able to close and minimize the player. The result is the current carefully hand crafted design.

Upon clicking on any video, a player pops up from the left. The player persists across page navigation. The player is always conditionally rendered according to presence of id=# in the URL's query string. If there exists an id=#, the video player is rendered, if not, an empty position fixed div is rendered. Upon detecting an id=#, the player checks if the id differs from that of the query's slate in the state. If it differs, then an Ajax request is dispatched to fetch the video and its corresponding comments. The video is added to the videos slate, and the comments to the comment slate.

The when the video player is rendered, an inline dummy div of equal width is also rendered, which serves to push the page content to the right.

The video player keeps track of internal state of minimized=boolean and showQueue=boolean. Additionally show comments is handled in the query string. These booleans are conditions to decide class names of various divs of the video player. Along with smooth transitions, these class changes allow users to freely adjust their viewing experience.
![logo.png](http://res.cloudinary.com/tlcoy4e3/image/upload/v1478887583/video_overlay_fqgtwm.png)

__________

###Profile Page

Shows a list of user's videos and user's comments. This information is fetched upon route entry and is contained inside the user slice of the state.
![logo.png](http://res.cloudinary.com/tlcoy4e3/image/upload/v1478888365/user-page_vwify5.png)

__________

###Upload Page

Allows users to drag and drop to upload videos. Videos require a title and uploaded video. The Cloudinary widget was customized to be an inline element and used as a drop area for videos. The widget was set up such that uploaded videos are sent to the Cloudinary server, and upon upload a success callback updates the upload form state with the video's URL. This thus allows our database to confirm the presence of a title and a video URL in one go.
![logo.png](http://res.cloudinary.com/tlcoy4e3/image/upload/v1478887563/upload_gtqzxd.png)

__________

###Query string

Currently playing video ID/ queued video IDs are kept in query string. Throughout the application, any request to play videos merely push or replace the hashHistory with updated query strings. The video overlay listens to this change and calls updates to the query state. The calls for query state updates cause fetch requests to be made.
![logo.png](http://res.cloudinary.com/tlcoy4e3/image/upload/v1478889008/URL_t3zftb.png)

__________

###Future Directions

Using other media sharing websites as examples, various other functionalities should be added to MotionCloud.


####User profile customizations

Users should be able to choose avatars, write personal descriptions, change passwords, add emails.


####Playlists

Users should be able to create and share playlists of their favorite videos.


####Categories

Tags should be added so the main page can be categorized into various video categories.

Developed by [Pysith Vanuptikul](https://www.linkedin.com/in/pivanup)
