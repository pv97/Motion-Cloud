import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import VideosReducer from './videos_reducer';
import CommentsReducer from './comments_reducer';
import QueryReducer from './query_reducer';
import UserReducer from './user_reducer';
import SearchReducer from './search_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  videos: VideosReducer,
  comments: CommentsReducer,
  query: QueryReducer,
  user: UserReducer,
  search: SearchReducer
});

export default RootReducer;
