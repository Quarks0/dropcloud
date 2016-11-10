import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import SongReducer from './song_reducer';
import UserReducer from './user_reducer';
import PlaybackReducer from './playback_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  songs: SongReducer,
  users: UserReducer,
  playback: PlaybackReducer
});

export default RootReducer;
