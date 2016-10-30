## Component Hierarchy

**OverlayContainer**
 - Header
  + (Signed In)
   - SignOutButton
   - UploadVideoButton
  + (Signed Out)
   - AuthForm (hover Sign up/log in to show)

 - SideArea
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
| "/" | "OverlayContainer" |
| "/videos/" | "VideoIndexContainer" |
| "/videos/new" | "UploadVideoContainer" |
| "/users/:id" | "UserContainer" |
