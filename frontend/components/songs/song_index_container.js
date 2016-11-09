import { connect } from 'react-redux';
import { fetchAllSongs } from '../../actions/song_actions';
import SongIndex from './song_index';


const mapStateToProps = (state) => {
  console.log(state);
  return
  {
  songs: state.songs
};};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllSongs: () => dispatch(fetchAllSongs())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(SongIndex);
