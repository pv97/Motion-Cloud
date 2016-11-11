import { SEARCH_VIDEOS, receiveSearchVideos } from '../actions/search_actions';
import { searchVideos } from '../util/search_api_util';
import { hashHistory } from 'react-router';

const VideosMiddleware = ({getState, dispatch}) => next => action => {
  let errorCallback = xhr => console.log(xhr);
  let successCallback = videos => {
    dispatch(receiveSearchVideos(videos));
    hashHistory.push("/search"+hashHistory.getCurrentLocation().search);
  };
  switch (action.type) {
    case SEARCH_VIDEOS:
      searchVideos(action.string, successCallback, errorCallback);
      return next(action);

    default:
      return next(action);
  }
};

export default VideosMiddleware;
