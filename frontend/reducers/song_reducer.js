import { RECEIVE_ALL_SONGS, RECEIVE_SONG, CLEAR_SONG_ERRORS, RECEIVE_SONG_ERRORS} from '../actions/song_actions';
import merge from 'lodash/merge';
import {RECEIVE_COMMENT} from '../actions/comment_actions';

const _defaultSongs = {
  songs: null,
  errors: []
};

const SongReducer = (state = _defaultSongs, action) => {
  Object.freeze(state)
  let newState = merge({}, state)
  switch(action.type) {
    case RECEIVE_ALL_SONGS:
      const songs = action.songs;
      return merge({}, _defaultSongs, {songs: songs});
    case RECEIVE_SONG:
      const song = action.song;
      return merge(newState, {songs: {[song.id]: song}});
    case RECEIVE_SONG_ERRORS:
      const errors = action.errors;
      return merge(newState, {
        errors
      });
    case RECEIVE_COMMENT:
      newState['songs'][action.song.id]['comments'] = action.song.comments;
      return newState;
    case CLEAR_SONG_ERRORS:
      return _defaultSongs;
    default:
      return state;
  }
};

export default SongReducer;
