import { RECEIVE_ALL_USERS, RECEIVE_USER, CLEAR_USER_ERRORS, RECEIVE_USER_ERRORS} from '../actions/user_actions';
import merge from 'lodash/merge';

const _defaultUsers = {
  users: null,
  errors: []
};

const UserReducer = (state = _defaultUsers, action) => {
  Object.freeze(state)
  let newState = merge({}, state)
  switch(action.type) {
    case RECEIVE_ALL_USERS:
      const users = action.users;
      return merge({}, _defaultUsers, {users: users});
    case RECEIVE_USER:
      const user = action.user;
      return merge(newState, {users: {[user.id]: user}});
    case RECEIVE_USER_ERRORS:
      const errors = action.errors;
      return merge(newState, {
        errors
      });
    case CLEAR_USER_ERRORS:
      return _defaultUsers;
    default:
      return state;
  }
};

export default UserReducer;
