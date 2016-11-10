import { connect } from 'react-redux';
import Player from './player';
import {playSong, pauseSong} from '../../actions/song_actions';


const mapStateToProps = (state) => ({
  song: state.playback.song,
  play: state.playback.play
});

const mapDispatchToProps = (dispatch) => ({
  playSong: (song) => dispatch(playSong(song)),
  pauseSong: () => dispatch(pauseSong())
});

export default connect(mapStateToProps)(Player);
