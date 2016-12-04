import ReactPlayer from 'react-player';
import React from 'react';

class Player extends React.Component{
  constructor(props){
    super(props);

    this.state = {progress: 0, duration: 0};
    this.update = this.update.bind(this);
  }

  update(progress){
    this.setState({played: progress.played})
  }


  render(){
    return(
      <div className="react-player">
        <ReactPlayer url={this.props.song.url}
          playing={this.props.play}></ReactPlayer>
      </div>
    );
  }
}

export default Player;
