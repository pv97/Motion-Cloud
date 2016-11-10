export const SEARCH_VIDEOS = "SEARCH_VIDEOS";
export const RECEIVE_SEARCH_VIDEOS = "RECEIVE_SEARCH_VIDEOS";

export const searchVideos = (string) => ({
  type: SEARCH_VIDEOS,
  string
});

export const receiveSearchVideos = (videos) => ({
  type: RECEIVE_SEARCH_VIDEOS,
  videos
});
