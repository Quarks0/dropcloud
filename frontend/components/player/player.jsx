import ReactPlayer from 'react-player';
import React from 'react';

class Player extends React.Component{
  constructor(props){
    super(props);

    this.state = {progress: 0, duration: 0};
  }



  render(){
    return(
      <div>
      </div>
    )
  }
}
// <ReactPlayer url={this.props.song.url}
//   onProgress={this.update} />

export default Player;
