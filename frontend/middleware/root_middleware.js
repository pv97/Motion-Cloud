import { applyMiddleware } from 'redux';

import SessionMiddleware from './session_middleware';
import VideosMiddleware from './videos_middleware';
import CommentsMiddleware from './comments_middleware';
import QueryMiddleware from './query_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  VideosMiddleware,
  CommentsMiddleware,
  QueryMiddleware
);

export default RootMiddleware;
