import { SET_VIDEO_QUERY, SET_COMMENT_QUERY } from '../actions/query_actions';
import merge from 'lodash/merge';

const QueryReducer = (oldState = {}, action) => {
  Object.freeze(oldState)
  switch (action.type) {
    case SET_VIDEO_QUERY:
      return {id:action.id};

    case SET_COMMENT_QUERY:
      let newState = merge({}, oldState);
      newState.c = action.c
      return newState;

    default:
      return oldState;
  }
};

export default QueryReducer;
