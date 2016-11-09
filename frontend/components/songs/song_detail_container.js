import { connect } from 'react-redux';
import { createSong, updateSong, deleteSong, fetchSong } from '../../actions/song_actions';
import SongDetail from './song_detail';


const mapStateToProps = (state, ownProps) => ({
  song: ownProps.song
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSong: (id) => dispatch(fetchSong(id)),
    createSong: (song) => dispatch(createSong(song)),
    updateSong: (song) => dispatch(updateSong(song)),
    deleteSong: (id) => dispatch(deleteSong(id))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(SongDetail);
