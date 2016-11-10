import { RECEIVE_SEARCH_VIDEOS } from '../actions/search_actions';

import merge from 'lodash/merge';

const VideosReducer = (oldState = {}, action) => {
  Object.freeze(oldState)

  switch (action.type) {
    case RECEIVE_SEARCH_VIDEOS:
      return action.videos;

    default:
      return oldState;
  }
};

export default VideosReducer;
