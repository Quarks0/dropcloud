//image url https://res.cloudinary.com/duhmzsirt/image/upload/v1478652827/default_song_gpl8kw.png
import React from 'react';
import {withRouter} from 'react-router';

class SongItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const imageURL = this.props.song.image_url ? this.props.song.image_url : "https://res.cloudinary.com/duhmzsirt/image/upload/v1478652827/default_song_gpl8kw.png";
    // const handleClick = url => e => this.props.router.push(url);

    //onClick={handleClick(`/songs/${this.props.song.id}`)}

    return (
    <div className="song-item" >
      <img src={imageURL}/>
      <span className="song-item-text">
        {this.props.song.title} - {this.props.song.artist}
      </span>
    </div>
  );
  }
}

export default withRouter(SongItem);
