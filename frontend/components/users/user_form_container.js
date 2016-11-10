import { connect } from 'react-redux';
import { createUser, updateUser, clearErrors } from '../../actions/user_actions';
import UserForm from './user_form';
import { selectUserDetail } from '../../reducers/selector';


const mapStateToProps = (state,ownProps) => {
  return {
  user: ownProps.user,
  currentUser: state.session.currentUser,
  errors: state.users.errors
}};

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (user) => dispatch(createUser(user)),
    updateUser: (user) => dispatch(updateUser(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(UserForm);
