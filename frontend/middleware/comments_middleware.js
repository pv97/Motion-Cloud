import {
  receiveComment,
  receiveAllComments,
  removeComment,
  receiveCommentErrors,
  FETCH_COMMENTS,
  FETCH_COMMENT,
  CREATE_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT
} from '../actions/comment_actions';

import {
  createComment,
  deleteComment,
  updateComment,
  fetchComments,
  fetchComment
} from '../util/comment_api_util';
import { hashHistory } from 'react-router';

const CommentsMiddleware = ({getState, dispatch}) => next => action => {

  const errorCallback = errors => dispatch(receiveCommentErrors(errors));
  let receiveAllCommentsSuccess = comments => dispatch(receiveAllComments(comments));
  let receiveCommentSuccess = comment => {
    dispatch(receiveComment(comment));
    hashHistory.push("/");
  };
  let removeCommentSuccess = comment => dispatch(removeComment(comment));

  switch (action.type) {
    case FETCH_COMMENTS:
      fetchComments(receiveAllCommentsSuccess, errorCallback);
      return next(action);

    case FETCH_COMMENT:
      fetchComment(action.id, receiveCommentSuccess, errorCallback);
      return next(action);

    case CREATE_COMMENT:
      createComment(action.comment, receiveCommentSuccess, errorCallback);
      return next(action);

    case UPDATE_COMMENT:
      updateComment(action.comment, receiveCommentSuccess, errorCallback);
      return next(action);

    case DELETE_COMMENT:
      deleteComment(action.id, removeCommentSuccess, errorCallback);
      return next(action);

    default:
      return next(action);
  }
};

export default CommentsMiddleware;
