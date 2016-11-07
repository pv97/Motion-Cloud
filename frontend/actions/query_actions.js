export const SET_VIDEO_QUERY = "SET_VIDEO_QUERY";
export const SET_COMMENT_QUERY = "SET_COMMENT_QUERY";

export const setVideoQuery = (id) => ({
  type: SET_VIDEO_QUERY,
  id
})

export const setCommentQuery = (c) => ({
  type: SET_COMMENT_QUERY,
  c
})
