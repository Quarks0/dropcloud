import { LOGIN, LOGOUT, SIGNUP, receiveCurrentUser } from '../actions/session_actions';

import { login, signup, logout } from '../util/session_api_util';

export default ({getState, dispatch}) => next => action => {
  const loginSuccess = user => dispatch(receiveCurrentUser(user));

  switch(action.type){
    case LOGIN:
      login(action.user, loginSuccess);
      return next(action);
    case LOGOUT:
      logout(() => next(action));
      break;
    case SIGNUP:
      signup(action.user, loginSuccess);
      return next(action);
    default:
      return next(action);
  }
};
