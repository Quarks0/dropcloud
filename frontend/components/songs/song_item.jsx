import React from 'react';
import {withRouter} from 'react-router';

class SongItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const imageURL = this.props.song.image_url === "" ? "http://res.cloudinary.com/duhmzsirt/image/upload/v1480975823/note-white_lfmcpm.png" : this.props.song.image_url;
    const handleClick = url => e => this.props.router.push(url);
    const togglePlay = (e) => {
      e.stopPropagation();
      if (this.props.song.url === this.props.currentSong.url) {
        this.props.play ? this.props.pauseSong() : this.props.playSong(this.props.song);
      }else {
        this.props.playSong(this.props.song);
      }};

    return (
    <div className="song-item" onClick={handleClick(`/home/songs/${this.props.song.id}`)}>
    <div className="underlay"><div className="play-button"><img className="album-art" src={imageURL} onClick={togglePlay}/></div></div>

      <div className="song-item-text-container">
        <div className="song-item-detail-container">
          <span className="song-item-text">
            {this.props.song.title} - {this.props.song.artist}
          </span>
          <span className="song-item-text-user">Uploaded by: {this.props.song.user.username}</span>
        </div>
        <div className="waveform"></div>
      </div>
    </div>
  );
  }
}

export default withRouter(SongItem);
