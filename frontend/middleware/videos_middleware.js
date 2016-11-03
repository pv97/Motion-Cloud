import {
  receiveVideo,
  receiveAllVideos,
  removeVideo,
  receiveVideoErrors,
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

  const errorCallback = errors => dispatch(receiveVideoErrors(errors));
  let receiveAllVideosSuccess = videos => dispatch(receiveAllVideos(videos));
  let receiveVideoSuccess = video => {
    dispatch(receiveVideo(video));
    hashHistory.push("/");
  };
  let removeVideoSuccess = video => dispatch(removeVideo(video));

  switch (action.type) {
    case FETCH_VIDEOS:
      fetchVideos(receiveAllVideosSuccess, errorCallback);
      return next(action);

    case FETCH_VIDEO:
      fetchVideo(action.id, receiveVideoSuccess, errorCallback);
      return next(action);

    case CREATE_VIDEO:
      createVideo(action.video, receiveVideoSuccess, errorCallback);
      return next(action);

    case UPDATE_VIDEO:
      updateVideo(action.video, receiveVideoSuccess, errorCallback);
      return next(action);

    case DELETE_VIDEO:
      deleteVideo(action.id, removeVideoSuccess, errorCallback);
      return next(action);

    default:
      return next(action);
  }
};

export default VideosMiddleware;
