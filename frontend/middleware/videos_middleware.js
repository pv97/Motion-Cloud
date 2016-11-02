import {
  receiveVideo,
  receiveAllVideos,
  removeVideo,
  FETCH_VIDEOS,
  FETCH_VIDEO,
  CREATE_VIDEO,
  UPDATE_VIDEO,
  DELETE_VIDEO
} from '../actions/video_actions';

import {
  createVideo,
  deleteVideo,
  updateVideo,
  fetchVideos,
  fetchVideo
} from '../util/video_api_util';
import { hashHistory } from 'react-router';

const VideosMiddleware = ({getState, dispatch}) => next => action => {
  let success;
  let error = e => console.log(e.responseJSON);
  let receiveAllVideosSuccess = videos => dispatch(receiveAllVideos(videos));
  let receiveVideoSuccess = video => {
    dispatch(receiveVideo(video));
    hashHistory.push("/");
  };
  let removeVideoSuccess = video => dispatch(removeVideo(video));

  switch (action.type) {
    case FETCH_VIDEOS:
      fetchVideos(receiveAllVideosSuccess, error);
      return next(action);

    case FETCH_VIDEO:
      fetchVideo(action.id, receiveVideoSuccess, error);
      return next(action);

    case CREATE_VIDEO:
      createVideo(action.video, receiveVideoSuccess, error);
      return next(action);

    case UPDATE_VIDEO:
      updateVideo(action.video, receiveVideoSuccess, error);
      return next(action);

    case DELETE_VIDEO:
      deleteVideo(action.id, removeVideoSuccess, error);
      return next(action);

    default:
      return next(action);
  }
};

export default VideosMiddleware;
