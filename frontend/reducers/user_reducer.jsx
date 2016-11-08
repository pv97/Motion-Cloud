import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_COMMENT, RECEIVE_REPLY } from '../actions/comment_actions';
import merge from 'lodash/merge';

const UserReducer = (oldState = {}, action) => {
  Object.freeze(oldState)
  let newState;
  
  switch (action.type) {

    case RECEIVE_USER:
      return action.user;

    case RECEIVE_COMMENT:
      newState = merge({},oldState)
      console.log(newState);
      newState.comments.push(action.comment)
      return newState;

    case RECEIVE_REPLY:
      newState = merge({},oldState)
      newState.comments.push(action.reply)
      return newState;

    default:
      return oldState;
  }
};

export default UserReducer;
