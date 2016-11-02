export const FETCH_VIDEOS = "FETCH_VIDEOS";
export const FETCH_VIDEO = "FETCH_VIDEO";
export const RECEIVE_ALL_VIDEOS = "RECEIVE_ALL_VIDEOS";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const REMOVE_VIDEO = "REMOVE_VIDEO";
export const CREATE_VIDEO = "CREATE_VIDEO";
export const UPDATE_VIDEO = "UPDATE_VIDEO";
export const DELETE_VIDEO = "DELETE_VIDEO";
export const RECEIVE_VIDEO_ERRORS = "RECEIVE_VIDEO_ERRORS";

export const fetchVideos = () => ({
  type: FETCH_VIDEOS
});

export const fetchVideo = id => ({
  type: FETCH_VIDEO,
  id
});

export const createVideo = video => ({
  type: CREATE_VIDEO,
  video
});

export const updateVideo = video => ({
  type: UPDATE_VIDEO,
  video
});

export const deleteVideo = id => ({
  type: DELETE_VIDEO,
  id
});

export const receiveAllVideos = videos => ({
  type: RECEIVE_ALL_VIDEOS,
  videos
});

export const receiveVideo = video => ({
  type: RECEIVE_VIDEO,
  video
});

export const removeVideo = video => ({
  type: REMOVE_VIDEO,
  video
});

export const receiveVideoErrors = errors => ({
  type: RECEIVE_VIDEO_ERRORS,
  errors
});
