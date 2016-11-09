import { connect } from 'react-redux';
import { createSong, updateSong, deleteSong, requestSong, clearErrors } from '../../actions/song_actions';
import SongDetail from './song_detail';
import {selectSongDetail} from '../../reducers/selector'


const mapStateToProps = (state, ownProps) => {
  debugger;
  return ({
  song: selectSongDetail(state.songs)[ownProps.params.songId]}
);};

const mapDispatchToProps = (dispatch) => {
  return {
    requestSong: (id) => dispatch(requestSong(id)),
    updateSong: (song) => dispatch(updateSong(song)),
    deleteSong: (id) => dispatch(deleteSong(id)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(SongDetail);
