import { SET_VIDEO_QUERY } from '../actions/query_actions';
import merge from 'lodash/merge';

const QueryReducer = (oldState = {}, action) => {
  Object.freeze(oldState)

  switch (action.type) {
    case SET_VIDEO_QUERY:
      return merge({}, {id:action.id,c:action.c});

    default:
      return oldState;
  }
};

export default QueryReducer;
