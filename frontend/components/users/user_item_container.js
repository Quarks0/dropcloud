import { connect } from 'react-redux';
import { fetchUser, deleteUser } from '../../actions/user_actions';
import UserItem from './user_item';


const mapStateToProps = (state, ownProps) => ({
  user: ownProps.user
});

const mapDispatchToProps = (dispatch) =>{

  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    updateUser: (user) => dispatch(updateUser(user)),
    deleteUser: (id) => dispatch(deleteUser(id))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(UserItem);
