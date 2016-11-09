import React from 'react';

class SongIndex extends React.Component{
  constructor(props){
    super(props);


  }

  render(){
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
