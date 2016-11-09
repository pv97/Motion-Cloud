import { SET_QUERY } from '../actions/query_actions';
import merge from 'lodash/merge';

const QueryReducer = (oldState = {}, action) => {
  Object.freeze(oldState)
  let newState;
  switch (action.type) {
    case SET_QUERY:
      newState = merge({}, oldState);
      newState.id = action.query.id;
      newState.c = action.query.c;
      newState.q = action.query.q;
      return newState;

    default:
      return oldState;
  }
};

export default QueryReducer;
