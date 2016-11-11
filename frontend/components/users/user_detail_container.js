import { connect } from 'react-redux';
import { createUser, updateUser, deleteUser, requestUser, clearUserErrors } from '../../actions/user_actions';
import UserDetail from './user_detail';
import {selectUserDetail} from '../../reducers/selector';


const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    user: state.users.users ? selectUserDetail(state.users.users)[ownProps.params.userId-1] : null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestUser: (id) => dispatch(requestUser(id)),
    updateUser: (user) => dispatch(updateUser(user)),
    clearUserErrors: () => dispatch(clearUserErrors()),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(UserDetail);
