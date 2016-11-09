import { connect } from 'react-redux';
import { createSong, updateSong } from '../../actions/song_actions';
import SongForm from './song_index';


const mapStateToProps = (state) => ({
  songs: state.songs
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllSongs: () => dispatch(fetchAllSongs()),
    createSong: (song) => dispatch(createSong(song)),
    updateSong: (song) => dispatch(updateSong(song)),
    deleteSong: (id) => dispatch(deleteSong(id))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(SongForm);
