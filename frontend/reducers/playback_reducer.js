import {PLAY_SONG, PAUSE_SONG} from '../actions/playback_actions';
import merge from 'lodash/merge';

const _defaultPlayback ={
  play: false,
  song: {}
};

const PlaybackReducer = (state = _defaultPlayback, action) => {
  Object.freeze(state)
  let newState = merge({}, state);
  switch(action.type) {
    case PLAY_SONG:
      if(action.song){
        return merge(newState, {play: true, song: action.song});
      } else {
        return merge(newState, {play: true});
      }
    case PAUSE_SONG:
      return merge(newState, {play: false});
    default:
      return state;
  }
};

export default PlaybackReducer;
