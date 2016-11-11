import React from 'react';
import SongItemContainer from './song_item_container';
import { Link, withRouter } from 'react-router';

class SongIndex extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="song-index">
        <div className="song-sidebar">
          <h3 className="current-index">Songs</h3>
          <h3><Link to={`/home/users/`} className="link">Users</Link></h3>
        </div>
        <ul className="song-item-container">
          {this.props.songs.map((song, i) => (
            <li key={i}><SongItemContainer song={song}/></li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SongIndex;
