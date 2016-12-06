import ReactPlayer from 'react-player';
import React from 'react';

class Player extends React.Component{
  constructor(props){
    super(props);

    this.state = {progress: 0, duration: 0, time: 0};
    this.update = this.update.bind(this);
    this.playerStatus = this.playerStatus.bind(this);
    this.formatTime = this.formatTime.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
    this.setDuration = this.setDuration.bind(this);
    this.endSong = this.endSong.bind(this);
    this.seek = this.seek.bind(this);
  }

  update(progress){
    if (progress.played) {
      this.setState({progress: progress.played, time: progress.played*this.state.duration});
    }
  }

  playerStatus(){
    let type = this.props.song.url ? "flex" : "none";
    return {display: type};
  }

  setDuration(duration){
    this.setState({duration: duration});
  }

  endSong(){
    this.props.clearSong();
    this.setState({progress: 0, duration: 0, time: 0});
  }

  formatTime(time){
    let ss = Math.floor(time%60);
    let mm = Math.floor(time/60);
    ss = ss < 10 ? "0"+ss : ""+ss;
    mm = mm < 10 ? "0"+mm : ""+mm;
    return mm+":"+ss;
  }

  seek(e){
    e.stopPropagation();
    this.props.pauseSong();
    let bar = document.getElementsByClassName('player-progress')[0];
    this.player.seekTo((e.clientX-bar.offsetLeft)/300);
    this.props.playSong(this.props.song);
  }

  togglePlay(e){
    e.stopPropagation();
    this.props.play ? this.props.pauseSong() : this.props.playSong(this.props.song);
  }

  render(){
    const playIcon = this.props.play ? "http://res.cloudinary.com/duhmzsirt/image/upload/v1480754195/1480644891_media-playback-pause_sphcem.png" : "http://res.cloudinary.com/duhmzsirt/image/upload/v1480754195/1480644943_media-playback-start_cavlo3.png"
    return(
      <div className="react-player" style={this.playerStatus()}>
        <div className="player-controls">
          <div className="back"><img src="http://res.cloudinary.com/duhmzsirt/image/upload/v1480754195/1480644951_Playback_Rewind_ff6mr2.png"></img></div>
          <div className="play" onClick={this.togglePlay}><img src={playIcon}></img></div>
          <div className="forward"><img src="http://res.cloudinary.com/duhmzsirt/image/upload/v1480754195/1480644949_Playback_Fast_Forward_mlb6tu.png"></img></div>
        </div>
        <div className="player-progress" onClick={this.seek}>
          <div className="audio-progress" style={{width: `${this.state.progress*100}%`}}></div>
          <ReactPlayer ref={player => {this.player = player}}
            url={this.props.song.url}
            playing={this.props.play}
            onDuration={this.setDuration}
            onProgress={this.update}
            hidden={true}
            onEnded={this.endSong}></ReactPlayer>
        </div>
        <div className="player-info">
          <div>{this.formatTime(this.state.time)}/{this.formatTime(this.state.duration)}</div>
          <div>{this.props.song.title}</div>
          <div>{this.props.song.artist}</div>
        </div>
      </div>
    );
  }
}

export default Player;
