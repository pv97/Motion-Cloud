{
  currentUser: {
    id: 1,
    username: "app-academy"
  },
  userForms: {
    signUp: {
      username: "",
      password: "",
      email: "",
      errors: []
    },
    logIn: {
      username: "",
      password: "",
      errors: []
    },
  },
  videoForms: {
    title: {errors: []},
    description : "Sample description",
    attachment : {},
    errors: []
  },
  Videos: {
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
      }
    }
  },
  curentVideo1: {
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
    commentForm: {
      body: ""
    }
  }

}
