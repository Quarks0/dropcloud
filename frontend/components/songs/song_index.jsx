import React from 'react';
import SongItemContainer from './song_item_container';

class SongIndex extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="song-index">
        <h3>Song Index</h3>
        <ul>
          {this.props.songs.map((song, i) => (
            <li key={i}><SongItemContainer song={song}/></li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SongIndex;
