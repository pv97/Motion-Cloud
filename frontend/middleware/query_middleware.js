import { SET_QUERY } from '../actions/query_actions';
import { receiveVideo } from '../actions/video_actions';
import { receiveAllComments } from '../actions/comment_actions';

import { fetchComments } from '../util/comment_api_util';
import { fetchVideo } from '../util/video_api_util';

export default ({getState, dispatch}) => next => action => {
  let receiveCommentsSuccess = comments => dispatch(receiveAllComments(comments));
  let receiveVideoSuccess = video => dispatch(receiveVideo(video));
  let errorCallback = xhr => console.log(xhr);

  switch(action.type){
    case SET_QUERY:
      if (action.query.id !== getState().query.id){
        fetchComments(action.query.id, receiveCommentsSuccess, errorCallback);
        fetchVideo(action.query.id,receiveVideoSuccess,errorCallback)
      }
      return next(action);

    default:
      return next(action);
  }
};
