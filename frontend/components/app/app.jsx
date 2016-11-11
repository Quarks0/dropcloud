import React from 'react';
import { Link } from 'react-router';
import SongIndexContainer from '../songs/song_index_container';
import PlayerContainer from '../player/player_container';

import Modal from 'react-modal';
import {loginModalStyle} from '../../util/modal_styles';
import SongFormContainer from '../songs/song_form_container';

document.addEventListener('DOMContentLoaded', () => {
  Modal.setAppElement(document.body);
});

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {songModal: false, formType: ""};
  }

  openModal(type){
    this.setState({songModal: true, formType: type});
  }

  closeModal(){
    this.setState({songModal: false, formType: ""});
  }

  componentWillReceiveProps(nextProps){
    if(!nextProps.currentUser){
      this.props.router.push('/');
    }
    else{
      this.closeModal();
    }
  }

  componentWillMount(){
    this.props.requestAllSongs();
  }

  goToProfile(){
    this.props.router.push(`/home/users/${this.props.currentUser.id}`);
  }

  render() {
  const username = this.props.currentUser ? this.props.currentUser.username : "";
  const blankSong = {title: "", artist: "", url:"", user_id: null, image_url: null};
  return (
      <div className="content">
        <header className="header">
          <Link to="/home" className="header-link"><img src="https://res.cloudinary.com/duhmzsirt/image/upload/v1478652827/logo_kafhys.gif" className="logo"/><h3 className="header-title">DropCloud</h3></Link>
          <nav className="nav-bar">
            <button onClick={this.openModal.bind(this,"upload")}>Upload</button>
            <button onClick={this.goToProfile.bind(this)}><img className="profile-pic" src="https://res.cloudinary.com/duhmzsirt/image/upload/v1478652827/default_profile_uon2xl.jpg"/>
            {username}</button>
            <button onClick={this.props.logout}>Log out</button>
          </nav>
        </header>

        <main className="main">
          <Modal isOpen={this.state.songModal} onRequestClose={this.closeModal.bind(this)}
            style={loginModalStyle}>

            <SongFormContainer closeModal={this.closeModal}
              formType={this.state.formType}
              clearSongErrors={this.props.clearSongErrors}
              song={blankSong}/>
          </Modal>
          {this.props.children}
        </main>

        <footer className="playback-footer"><PlayerContainer /></footer>
      </div>
  );
  }
}

export default App;
