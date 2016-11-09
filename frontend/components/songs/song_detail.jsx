import React from 'react';

class SongDetail extends React.Component{
  constructor(props){
    super(props);

  }

  componentWillMount(){
    this.props.fetchSong(1);
  }

  render (){

    return(
      <div>placeholder</div>
    );
  }
}

export default SongDetail;
