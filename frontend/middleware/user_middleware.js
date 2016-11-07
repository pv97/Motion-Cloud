import {
  receiveUser,
  FETCH_USER
} from '../actions/user_actions';

import { fetchUser } from '../util/user_api_util';

export default ({getState, dispatch}) => next => action => {
  const successCallback = user => dispatch(receiveUser(user));
  const errorCallback = xhr => console.log(xhr);

  switch(action.type){
    case FETCH_USER:
      fetchUser(action.id, successCallback, errorCallback);
      return next(action);

    default:
      return next(action);
  }
};
