import { REQUEST_ALL_USERS, REQUEST_USER, UPDATE_USER, receiveAllUsers, receiveUser } from '../actions/user_actions';

import { fetchAllUsers, fetchUser, createUser, deleteUser, updateUser } from '../util/user_api_util';

export default ({dispatch}) => next => action => {
  const fetchAllUserSuccess = users => dispatch(receiveAllUsers(users));
  const fetchUserSuccess = user => dispatch(receiveUser(user));
  const deleteUserSuccess = () => dispatch(fetchAllUsers());

  switch(action.type){
    case REQUEST_ALL_USERS:
      fetchAllUsers(fetchAllUserSuccess);
      return next(action);
    case REQUEST_USER:
      fetchUser(action.id,fetchUserSuccess);
      return next(action);
    case UPDATE_USER:
      updateUser(action.user, fetchUserSuccess)
      return next(action);
    default:
      return next(action);
  }
};
