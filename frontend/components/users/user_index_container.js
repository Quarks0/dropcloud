import { connect } from 'react-redux';
import { fetchAllUsers } from '../../actions/user_actions';
import UserIndex from './user_index';
import { selectAllUsers } from '../../reducers/selector';


const mapStateToProps = (state) => {
  return({
  users: selectAllUsers(state.users.users)
});};

const mapDispatchToProps = (dispatch) => ({
    fetchAllUsers: () => dispatch(fetchAllUsers())
});

export default connect(mapStateToProps,mapDispatchToProps)(UserIndex);
