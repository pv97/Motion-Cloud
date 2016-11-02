## Component Hierarchy

**AppContainer**
 - Header
  + UserNavContainer (logged in)
    - SignOutButton
    - UploadVideoButton
  + SessionFormContainer (logged out)
    - SessionFormBox
    - Switch form type button

 - VideoPlayer
  + CurrentVideo
    - CurrentVideoPlayer
    - CurrentVideoDetails
    - LikeVideoButton
    - DislikeVideoButton
  + CurrentVideoComments (hover to show)
    - CurrentVideoCommentIndexItem
    - (Signed In) CreateComment

**VideoIndexContainer**
 - videoIndexItem (displayed according to search bar entry)
  + videoDetail

**UserShowContainer**
 - videoIndexItem
  + videoDetail

**VideoUploadFormContainer**
 - VideoUploadForm



## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "App" |
| "/" | "routeindex: VideoIndexContainer" |
| "/videos/new" | "VideoUploadFormContainer" |
| "/users/:id" | "UserContainer" |
