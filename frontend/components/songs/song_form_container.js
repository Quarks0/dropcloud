import { connect } from 'react-redux';
import { createSong, updateSong, clearErrors } from '../../actions/song_actions';
import SongForm from './song_form';
import { selectSongDetail } from '../../reducers/selector';


const mapStateToProps = (state,ownProps) => {
  return {
  song: ownProps.song,
  currentUser: state.session.currentUser,
  errors: state.songs.errors
}};

const mapDispatchToProps = (dispatch) => {
  return {
    createSong: (song) => dispatch(createSong(song)),
    updateSong: (song) => dispatch(updateSong(song)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(SongForm);
