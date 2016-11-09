import { applyMiddleware } from 'redux';

import SessionMiddleware from './session_middleware';
import SongMiddleware from './song_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  SongMiddleware
);

export default RootMiddleware;
