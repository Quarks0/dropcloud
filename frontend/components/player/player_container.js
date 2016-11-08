import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import Player from './audio_player';


const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);

  return {
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
