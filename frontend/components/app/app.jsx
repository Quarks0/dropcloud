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
  this.setState({uploadModal: true, formType: type});
}

closeModal(){
  this.setState({uploadModal: false, formType: ""});
}

  componentWillReceiveProps(nextProps){
    if(!nextProps.currentUser){
      this.props.router.push('/');
    }
  }

  componentWillMount(){
    this.props.requestAllSongs();
  }

  goToProfile(){
    this.props.router.push('/home/profile')
  }

  render() {
  const username = this.props.currentUser ? this.props.currentUser.username : "";
  const blankSong = {title: "", artist: "", url:"", user_id: null, image_url: null};
  return (
      <div>
        <header>
          <Link to="/home" className="header-link"><img src="https://res.cloudinary.com/duhmzsirt/image/upload/v1478652827/logo_kafhys.gif" className="logo"/><h3 className="header-title">DropCloud</h3></Link>
          <nav className="nav-bar">
            <button onClick={this.openModal.bind(this,"upload")}>Upload</button>
            <button onClick={this.goToProfile.bind(this)}><img className="profile-pic" src="https://res.cloudinary.com/duhmzsirt/image/upload/v1478652827/default_profile_uon2xl.jpg"/>
            {username}</button>
            <button onClick={this.props.logout}>Log out</button>
          </nav>
        </header>

        <Modal isOpen={this.state.uploadModal} onRequestClose={this.closeModal.bind(this)}
          style={loginModalStyle}>

          <SongFormContainer closeModal={this.closeModal}
            formType={this.state.formType}
            song={blankSong}/>
        </Modal>

        <main className="Content">
          {this.props.children}
        </main>

        <footer>player placeholder</footer>
      </div>
  );
  }
}

export default App;
