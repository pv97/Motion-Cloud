import { SET_QUERY } from '../actions/query_actions';
import merge from 'lodash/merge';

const QueryReducer = (oldState = {}, action) => {

  switch (action.type) {
    case SET_QUERY:
      return merge({}, {id:action.query});

    default:
      return oldState;
  }
};

export default QueryReducer;
