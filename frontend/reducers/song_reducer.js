import { RECEIVE_ALL_SONGS, RECEIVE_SONG, CLEAR_ERRORS } from '../actions/song_actions';
import merge from 'lodash/merge';

const _nullSongs = [];

const SongReducer = (state = _nullSongs, action) => {
  Object.freeze(state)
  let newState = merge({}, state)
  switch(action.type) {
    case RECEIVE_ALL_SONGS:
      return action.songs;
    case RECEIVE_SONG:
      return merge(newState, {[action.song.id]: action.song});
    case CLEAR_ERRORS:
      return _nullSongs;
    default:
      return state;
  }
};

export default SongReducer;
