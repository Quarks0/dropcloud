import React from 'react';
import { Link } from 'react-router';
import SongIndexContainer from '../songs/song_index_container';
import PlayerContainer from '../player/player_container';

import Modal from 'react-modal';
import {loginModalStyle} from '../../util/modal_styles';
import SongFormContainer from '../songs/song_form_container';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {uploadModal: false};
  }


openModal(){
  this.props.clearErrors();
  this.setState({uploadModal: true});
}

closeModal(){
  this.setState({uploadModal: false});
}

  componentWillReceiveProps(nextProps){
    if(!nextProps.currentUser){
      this.props.router.push('/');
    }
  }

  componentWillMount(){
    this.props.requestAllSongs();
  }

  render() {
  let username = this.props.currentUser ? this.props.currentUser.username : "";
  return (
      <div>
        <header>
          <Link to="/home" className="header-link"><img src="https://res.cloudinary.com/duhmzsirt/image/upload/v1478652827/logo_kafhys.gif" className="logo"/><h3 className="header-title">DropCloud</h3></Link>
          <nav className="nav-bar">
            <button onClick={this.openModal.bind(this)}>Upload</button>
            <button><img className="profile-pic" src="https://res.cloudinary.com/duhmzsirt/image/upload/v1478652827/default_profile_uon2xl.jpg"/>
            {username}</button>
            <button onClick={this.props.logout}>Log out</button>
          </nav>
        </header>

        <Modal isOpen={this.state.uploadModal} onRequestClose={this.closeModal.bind(this)}
          style={loginModalStyle}>
          <SongFormContainer closeModal={this.closeModal} clearErrors={this.props.clearErrors}/>
        </Modal>

        <SongIndexContainer songs={this.props.songs}/>
      </div>
  );
  }
}

export default App;
