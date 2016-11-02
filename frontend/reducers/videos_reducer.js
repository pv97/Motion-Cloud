import { RECEIVE_ALL_VIDEOS,
         RECEIVE_VIDEO,
         REMOVE_VIDEO,
         RECEIVE_VIDEO_ERRORS
       } from '../actions/video_actions';
import merge from 'lodash/merge';

const VideosReducer = (oldState = {errors:[]}, action) => {

  switch (action.type) {
    case RECEIVE_ALL_VIDEOS:
      return merge({}, action.videos);

    case RECEIVE_VIDEO:
      return merge({}, oldState, {[action.video.id]: action.video});

    case REMOVE_VIDEO:
      let newState = merge({}, oldState);
      delete newState[action.video.id];
      return newState;

    case RECEIVE_VIDEO_ERRORS:
      const errors = action.errors;
      return merge({}, oldState, {errors});

    default:
      return oldState;
  }
};

export default VideosReducer;
