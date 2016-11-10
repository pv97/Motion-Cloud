import { SET_QUERY } from '../actions/query_actions';
import { receiveVideo } from '../actions/video_actions';
import { receiveAllComments } from '../actions/comment_actions';

import { fetchComments } from '../util/comment_api_util';

export default ({getState, dispatch}) => next => action => {
  const receiveCommentsSuccess = comments => dispatch(receiveAllComments(comments));
  const errorCallback = xhr => console.log(xhr);
console.log(action);
  switch(action.type){
    case SET_QUERY:
      if (action.query.id !== getState().query.id){
        fetchComments(action.query.id, receiveCommentsSuccess, errorCallback);
      }
      return next(action);

    default:
      return next(action);
  }
};
