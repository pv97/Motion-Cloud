```js
{
  currentUser: {
    id: 1,
    username: "app-academy",
    errors:{}
  },
  query: {
    id: 1,
    c:true,
    q:"1q2"
  },
  authForm: {
    id: 1,
    username: "username",
    password: "password",
    errors: {}
  },
  videos: {
    1: {
      id: 1,
      title: "Sample Video",
      url: "https://www.cloudinary.com"
      thumbnail_url: "https://www.cloudinary.com"
      body: "Sample comment",
      user_id: 1,
      video_id: 1,
      likes: 1,
      dislikes: 1
    },
    errors:{}
    }
  },
  user: {
    username: "username",
    videos: {
      1: {
        id: 1,
        title: "Sample Video",
        url: "https://www.cloudinary.com"
        thumbnail_url: "https://www.cloudinary.com"
        body: "Sample comment",
        user_id: 1,
        video_id: 1,
        likes: 1,
        dislikes: 1,
      },
    },
    comments: {
      1:{
        id: 1,
        user_id: 1,
        video_id: 1,
        parent_comment_id:-1,
        body:""
      }
    }
  },
  comments:{
    1:{
      id: 1,
      user_id: 1,
      video_id: 1,
      parent_comment_id:-1,
      body:""
      childComments:[
        {     
          id: 2
          user_id: 1,
          video_id: 1,
          parent_comment_id:1,
          body:""
        }
      ]
    }
  }
  commentForm: {
    body: "",
    errors:{}
  },
  search: {
    1: {
      id: 1,
      title: "Sample Video",
      url: "https://www.cloudinary.com"
      thumbnail_url: "https://www.cloudinary.com"
      body: "Sample comment",
      user_id: 1,
      video_id: 1,
      likes: 1,
      dislikes: 1
    },
    errors:{}
    }
  }
}
```
