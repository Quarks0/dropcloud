import { RECEIVE_ALL_SONGS, RECEIVE_SONG } from '../actions/song_actions';
import merge from 'lodash/merge';

const _nullSongs = {
  songs: null
};

const SessionReducer = (state = _nullSongs, action) => {
  Object.freeze(state)
  let newState = merge({}, state)
  switch(action.type) {
    case RECEIVE_ALL_SONGS:
      return action.songs;
    case RECEIVE_SONG:
      return merge(newState, {[action.song.id]: action.song});
    default:
      return state;
  }
};

export default SessionReducer;
