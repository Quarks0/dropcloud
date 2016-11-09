import { connect } from 'react-redux';
import { fetchSong, deleteSong } from '../../actions/song_actions';
import SongItem from './song_item';


const mapStateToProps = (state, ownProps) => ({
  song: ownProps.song
});

const mapDispatchToProps = (dispatch) =>{

  return {
    fetchSong: (id) => dispatch(fetchSong(id)),
    updateSong: (song) => dispatch(updateSong(song)),
    deleteSong: (id) => dispatch(deleteSong(id))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(SongItem);
