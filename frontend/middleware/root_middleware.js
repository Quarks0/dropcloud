import { applyMiddleware } from 'redux';

import SessionMiddleware from './session_middleware';
import SongMiddleware from './song_middleware';
import UserMiddleware from './user_middleware';
import CommentMiddleware from './comment_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  SongMiddleware,
  UserMiddleware,
  CommentMiddleware
);

export default RootMiddleware;
