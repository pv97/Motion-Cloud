import {
  receiveUser,
  FETCH_USER
} from '../actions/user_actions';

import { fetchUser } from '../util/user_api_util';

export default ({getState, dispatch}) => next => action => {
  let successCallback = user => dispatch(receiveUser(user));
  let errorCallback = xhr => console.log(xhr);

  switch(action.type){
    case FETCH_USER:
      fetchUser(action.id, successCallback, errorCallback);
      return next(action);

    default:
      return next(action);
  }
};
