import { connect } from 'react-redux';
import { createSong, updateSong, deleteSong, requestAllSongs, clearSongErrors } from '../../actions/song_actions';
import SongDetail from './song_detail';
import {selectSongDetail} from '../../reducers/selector'


const mapStateToProps = (state, ownProps) => {
  return {
  song: selectSongDetail(state.songs.songs)[ownProps.params.songId]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestAllSongs: () => dispatch(requestAllSongs()),
    updateSong: (song) => dispatch(updateSong(song)),
    deleteSong: (id) => dispatch(deleteSong(id)),
    clearSongErrors: () => dispatch(clearSongErrors())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(SongDetail);
