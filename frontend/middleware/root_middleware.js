import { applyMiddleware } from 'redux';

import SessionMiddleware from './session_middleware';
import SongMiddleware from './song_middleware';
import UserMiddleware from './user_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  SongMiddleware,
  UserMiddleware
);

export default RootMiddleware;
