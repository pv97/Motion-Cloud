## Component Hierarchy

**AppContainer**
 - Header
  + UserNavContainer (logged in)
    - SignOutButton
    - UploadVideoButton
  + SessionFormContainer (logged out)
    - SessionFormBox
    - Switch form type button

 - VideoOverlay
  + VideoPlayerContainer
    - CurrentVideoPlayer
    - CurrentVideoDetails
    - LikeVideoButton
    - DislikeVideoButton
  + CommentsContainer (hover to show)
    - CommentItem
    - (Signed In) CreateComment

  - SearchContainer

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
