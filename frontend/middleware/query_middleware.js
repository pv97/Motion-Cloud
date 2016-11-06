// actions
import { SET_QUERY } from '../actions/query_actions';
import { receiveVideo } from '../actions/video_actions';
import { receiveAllComments } from '../actions/comment_actions';

// api utils
import { fetchVideo } from '../util/video_api_util';
import { fetchComments } from '../util/comment_api_util';

export default ({getState, dispatch}) => next => action => {
  const receiveVideoSuccess = video => dispatch(receiveVideo(video));
  const receiveCommentsSuccess = comments => dispatch(receiveAllComments(comments));
  const errorCallback = xhr => console.log(xhr);

  switch(action.type){
    case SET_QUERY:
      if (action.query){
        fetchVideo(action.query, receiveVideoSuccess, errorCallback);
        fetchComments(action.query, receiveCommentsSuccess, errorCallback);
      }
      return next(action);

    default:
      return next(action);
  }
};
