import { connect } from 'react-redux';
import { fetchAllSongs } from '../../actions/song_actions';
import SongIndex from './song_index';
import { selectAllSongs } from '../../reducers/selector';


const mapStateToProps = (state) => {
  console.log(state);
  return({
  songs: selectAllSongs(state.songs.songs)
});};

const mapDispatchToProps = (dispatch) => ({
    fetchAllSongs: () => dispatch(fetchAllSongs())
});

export default connect(mapStateToProps,mapDispatchToProps)(SongIndex);
