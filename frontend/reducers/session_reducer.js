import { RECEIVE_CURRENT_USER, LOGOUT, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

//TODO modify state so that errors are saved separately from songs to avoid songs.songs syntax

const _defaultUser = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = _defaultUser, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, _defaultUser, {currentUser});
    case LOGOUT:
      return _defaultUser;
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, _defaultUser, {
        errors
      });
    case CLEAR_ERRORS:
      return _defaultUser;
    default:
      return state;
  }
};

export default SessionReducer;
