// actions
import { SET_QUERY, setQuery } from '../actions/query_actions';
import { receiveVideo } from '../actions/video_actions';

// api utils
import { fetchVideo } from '../util/video_api_util';

export default ({getState, dispatch}) => next => action => {
  const successCallback = video => dispatch(receiveVideo(video));
  const errorCallback = xhr => console.log(xhr);
  
  switch(action.type){
    case SET_QUERY:

      if (action.query){
        fetchVideo(action.query, successCallback, errorCallback);
      }
      return next(action);

    default:
      return next(action);
  }
};
