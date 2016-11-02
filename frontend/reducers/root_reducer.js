import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import VideosReducer from './videos_reducer';
import QueryReducer from './query_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  videos: VideosReducer,
  query: QueryReducer
});

export default RootReducer;
