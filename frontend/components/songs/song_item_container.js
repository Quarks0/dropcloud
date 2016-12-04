import { connect } from 'react-redux';
import { fetchSong, deleteSong } from '../../actions/song_actions';
import {playSong, pauseSong} from '../../actions/playback_actions';
import SongItem from './song_item';


const mapStateToProps = (state, ownProps) => ({
  song: ownProps.song,
  play: state.playback.play,
  currentSong: state.playback.song
});

const mapDispatchToProps = (dispatch) =>{

  return {
    fetchSong: (id) => dispatch(fetchSong(id)),
    updateSong: (song) => dispatch(updateSong(song)),
    deleteSong: (id) => dispatch(deleteSong(id)),
    playSong: (song) => dispatch(playSong(song)),
    pauseSong: () => dispatch(pauseSong())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(SongItem);
