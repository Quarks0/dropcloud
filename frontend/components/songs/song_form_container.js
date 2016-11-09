import { connect } from 'react-redux';
import { createSong, updateSong } from '../../actions/song_actions';
import SongForm from './song_index';


const mapStateToProps = (state) => ({
  songs: state.songs
});

const mapDispatchToProps = (dispatch) => {
  console.log("Inside song form container");
  return {
    createSong: (song) => dispatch(createSong(song)),
    updateSong: (song) => dispatch(updateSong(song))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(SongForm);
