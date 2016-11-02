```js
{
  currentUser: {
    id: 1,
    username: "app-academy",
    errors:[]
  },
  authForm: {
    username: "username",
    password: "password",
    errors: []
  },
  videos: {
    1: {
      title: "Sample Video",
      url: "https://www.cloudinary.com"
      body: "Sample comment",
      user_id: 1,
      video_id: 1,
      likes: 1,
      dislikes: 1,
      comments: {
          user_id: 1,
          video_id: 1,
          body: "Sample"
          likes: 1,
          dislikes: 1
        }
      },
      errors:[]
    }
  },
  userShow: {
    username: "username",
    videoIndex: {
      1: {
        title: "Sample Video",
        url: "https://www.cloudinary.com"
        body: "Sample comment",
        user_id: 1,
        video_id: 1,
        likes: 1,
        dislikes: 1
        }
      }
    }
  },
  commentForm: {
    body: "",
    errors:[]
  }
}
```
