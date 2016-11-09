import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import App from './app';
import { requestAllSongs, clearErrors } from '../../actions/song_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  songs: state.songs
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  requestAllSongs: () => dispatch(requestAllSongs()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
