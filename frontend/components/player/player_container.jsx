import { connect } from 'react-redux';
import Player from './player';
import {playSong, pauseSong, clearSong} from '../../actions/playback_actions';


const mapStateToProps = (state) => ({
  song: state.playback.song,
  play: state.playback.play
});

const mapDispatchToProps = (dispatch) => ({
  playSong: (song) => dispatch(playSong(song)),
  pauseSong: () => dispatch(pauseSong()),
  clearSong: () => dispatch(clearSong())
});

export default connect(mapStateToProps,mapDispatchToProps)(Player);
