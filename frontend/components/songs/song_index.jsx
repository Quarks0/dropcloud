import React from 'react';
import SongItemContainer from './song_item_container';

class SongIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchAllSongs();
  }

  render(){
    console.log(this.props);
    return (
      <div className="song-index">
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
