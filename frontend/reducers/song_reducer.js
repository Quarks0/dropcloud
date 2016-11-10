import { RECEIVE_ALL_SONGS, RECEIVE_SONG, CLEAR_SONG_ERRORS, RECEIVE_SONG_ERRORS} from '../actions/song_actions';
import merge from 'lodash/merge';

const _nullSongs = {
  songs: null,
  errors: []
};

const SongReducer = (state = _nullSongs, action) => {
  Object.freeze(state)
  let newState = merge({}, state)
  switch(action.type) {
    case RECEIVE_ALL_SONGS:
      const songs = action.songs;
      return merge({}, _nullSongs, {songs: songs});
    case RECEIVE_SONG:
      const song = action.song;
      return merge(newState, {[song.id]: song});
    case RECEIVE_SONG_ERRORS:
      const errors = action.errors;
      return merge(newState, {
        errors
      });
    case CLEAR_SONG_ERRORS:
      return _nullSongs;
    default:
      return state;
  }
};

export default SongReducer;
