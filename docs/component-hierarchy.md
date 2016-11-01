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

**UploadVideoContainer**
 - UploadVideoForm



## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "App" |
| "/videos/" | "VideoIndexContainer" |
| "/videos/new" | "UploadVideoContainer" |
| "/users/:id" | "UserContainer" |
