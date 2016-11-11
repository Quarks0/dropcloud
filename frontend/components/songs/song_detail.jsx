import React from 'react';
import {withRouter} from 'react-router';

import Modal from 'react-modal';
import {loginModalStyle} from '../../util/modal_styles';
import SongFormContainer from '../songs/song_form_container';

class SongDetail extends React.Component{
  constructor(props){
    super(props);

    this.state={songModal: false, formType: ""};

    this.handleDelete = this.handleDelete.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
  }

  openModal(type){
    this.setState({songModal: true, formType: type});
  }

  closeModal(){
    this.setState({songModal: false, formType: ""});
  }

  togglePlay(){
    //for playback
  }

  handleDelete() {
    this.props.deleteSong(this.props.song.id);
    this.props.router.push('/home');
  }

  render (){
    console.log(this.props);
    return(
      <section className="song-detail">
        <img src={this.props.song.image_url === "" ? "https://res.cloudinary.com/duhmzsirt/image/upload/v1478652827/default_song_gpl8kw.png" : this.props.song.image_url} onClick={this.togglePlay}/>
        <span className="song-detail-text">Title: {this.props.song.title}</span>
        <span className="song-detail-text">Artist: {this.props.song.artist}</span>
        <span className="song-detail-text">Uploaded by: {this.props.song.user.username}</span>
        <button className="song-detail-button" onClick={this.openModal.bind(this, "edit")}>Edit</button>
        <button className="song-detail-delete" onClick={this.handleClick}>Delete</button>

        <Modal isOpen={this.state.songModal} onRequestClose={this.closeModal.bind(this)}
          style={loginModalStyle}>
          <SongFormContainer
            closeModal={this.closeModal}
            clearErrors={this.props.clearSongErrors}
            formType={this.state.formType}
            song={this.props.song}/>
        </Modal>

        <ul className="song-comments-container">
          {this.props.song.comments.map((comment, i) => (
              <li key={i}>{comment.body} - {comment.username}</li>
          ))}
        </ul>
        <br/>


      </section>
    );
  }
}

export default withRouter(SongDetail);
