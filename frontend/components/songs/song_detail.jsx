import React from 'react';
import {withRouter} from 'react-router';

import Modal from 'react-modal';
import {loginModalStyle} from '../../util/modal_styles';
import SongFormContainer from '../songs/song_form_container';

class SongDetail extends React.Component{
  constructor(props){
    super(props);

    this.state={songModal: false, formType: ""};
  }

  openModal(type){
    this.props.clearErrors();
    this.setState({songModal: true, formType: type});
  }

  closeModal(){
    this.setState({songModal: false, formType: ""});
  }

  componentWillMount(){
    this.props.requestSong(this.props.params.songId);
  }

  render (){
    debugger;
    const imageURL = this.props.song.image_url ? this.props.song.image_url : "https://res.cloudinary.com/duhmzsirt/image/upload/v1478652827/default_song_gpl8kw.png";
    console.log(this.props);
    return(
      <section className="song-detail">
        <img src={imageURL} />
        <span className="song-detail-title">Title: {this.props.song.title}</span>
        <span className="song-detail-artist">Artist: {this.props.song.artist}</span>
        <span className="song-detail-user">Uploaded by: {this.props.song.user.username}</span>
        <button className="song-detail-button" onClick={this.openModal.bind(this, "edit")}>Edit</button>
        <button className="song-detail-button" onClick={this.props.deleteSong}>Delete</button>

        <Modal isOpen={this.state.songModal} onRequestClose={this.closeModal.bind(this)}
          style={loginModalStyle}>
          <SongFormContainer closeModal={this.closeModal} clearErrors={this.props.clearErrors} formType={this.state.formType}/>
        </Modal>

        <ul className="song-comments-container">
          {this.props.song.comments.map((comment, i) => (
              <li key={i}>{comment.body} - {comment.username}</li>
          ))}
        </ul>

      </section>
    );
  }
}

export default SongDetail;
