import { RECEIVE_ALL_COMMENTS,
         RECEIVE_COMMENT,
         RECEIVE_REPLY,
         REMOVE_COMMENT,
         RECEIVE_COMMENT_ERRORS
       } from '../actions/comment_actions';
import merge from 'lodash/merge';

const CommentsReducer = (oldState = {errors:{}}, action) => {
  Object.freeze(oldState)
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_COMMENTS:
      return merge({}, oldState, action.comments);

    case RECEIVE_COMMENT:
      return merge({}, oldState, {[action.comment.id]: action.comment, errors:{}});

    case RECEIVE_REPLY:
      let newState = merge({}, oldState, {errors:{}})
      newState[action.reply.parent_comment_id].child_comments.push(action.reply)
      return newState

    case REMOVE_COMMENT:
      newState = merge({}, oldState);
      delete newState[action.comment.id];
      return newState;

    case RECEIVE_COMMENT_ERRORS:
      const errors = action.errors.responseJSON;
      newState = merge({}, oldState);
      newState.errors = {}
      return merge(newState, {errors});

    default:
      return oldState;
  }
};

export default CommentsReducer;
