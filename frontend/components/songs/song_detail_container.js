import { connect } from 'react-redux';
import { createSong, updateSong, deleteSong, requestAllSongs, clearSongErrors } from '../../actions/song_actions';
import SongDetail from './song_detail';
import {selectSongDetail} from '../../reducers/selector';
import {playSong, pauseSong} from '../../actions/playback_actions';


const mapStateToProps = (state, ownProps) => {
  return {
<<<<<<< HEAD
    song: selectSongDetail(state.songs.songs)[ownProps.params.songId-1]
=======
  song: selectSongDetail(state.songs.songs)[ownProps.params.songId]
>>>>>>> parent of 4d29c14... song CRUD finalized
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestAllSongs: () => dispatch(requestAllSongs()),
    updateSong: (song) => dispatch(updateSong(song)),
    deleteSong: (id) => dispatch(deleteSong(id)),
    clearSongErrors: () => dispatch(clearSongErrors()),
    playSong: (song) => dispatch(playSong(song)),
    pauseSong: () => dispatch(pauseSong())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(SongDetail);
