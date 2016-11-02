export const FETCH_VIDEOS = "FETCH_VIDEOS";
export const FETCH_VIDEO = "FETCH_VIDEO";
export const RECEIVE_ALL_VIDEOS = "RECEIVE_ALL_VIDEOS";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const REMOVE_VIDEO = "REMOVE_VIDEO";
export const CREATE_VIDEO = "CREATE_VIDEO";
export const UPDATE_VIDEO = "UPDATE_VIDEO";
export const DELETE_VIDEO = "DELETE_VIDEO";

export const fetchPosts = () => ({
  type: FETCH_VIDEOS
});

export const fetchPost = id => ({
  type: FETCH_VIDEO,
  id
});

export const createPost = video => ({
  type: CREATE_VIDEO,
  video
});

export const updatePost = video => ({
  type: UPDATE_VIDEO,
  video
});

export const deletePost = id => ({
  type: DELETE_VIDEO,
  id
});

export const receiveAllPosts = videos => ({
  type: RECEIVE_ALL_VIDEOS,
  videos
});

export const receivePost = video => ({
  type: RECEIVE_VIDEO,
  video
});

export const removePost = video => ({
  type: REMOVE_VIDEO,
  video
});
