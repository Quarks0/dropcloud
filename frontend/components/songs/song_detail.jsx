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
    this.editandDeleteButtons = this.editandDeleteButtons.bind(this);
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

  editandDeleteButtons() {
    if (this.props.params.userId == this.props.currentUser.id){
      return(
        <div className="song-detail-controls">
          <button className="song-detail-button" onClick={this.openModal.bind(this, "edit")}>Edit</button>
          <button className="song-detail-delete" onClick={this.handleClick}>Delete</button>
        </div>
      );
    }
  }

  handleDelete() {
    this.props.deleteSong(this.props.song.id);
    this.props.router.push('/home');
  }

  render (){
    return(
      <section className="song-detail-container">
        <div className="song-detail">
          <img src={this.props.song.image_url === "" ? "https://res.cloudinary.com/duhmzsirt/image/upload/v1478652827/default_song_gpl8kw.png" : this.props.song.image_url} onClick={this.togglePlay}/>
          <span className="song-detail-text">{this.props.song.title} - {this.props.song.artist}</span>
          <span className="song-detail-text-user">Uploaded by: {this.props.song.user.username}</span>
          {this.editandDeleteButtons}

          <Modal isOpen={this.state.songModal} onRequestClose={this.closeModal.bind(this)}
            style={loginModalStyle}>
            <SongFormContainer
              closeModal={this.closeModal}
              clearErrors={this.props.clearSongErrors}
              formType={this.state.formType}
              song={this.props.song}/>
          </Modal>
        </div>

        <div className="song-comments-container">
          <div className="comment-container"><h4>Add Comment:</h4>

          </div>
        </div>

          <h4>Comments</h4>
          <ul className="song-comments">
            {this.props.song.comments.map((comment, i) => (
              <li key={i} className="song-comment">
                <div className="comment-username">{comment.username} commented: </div>
                <div className-"comment-body">{comment.body}</div>
              </li>
            ))}
          </ul>
        </div>
        <br/>


      </section>
    );
  }
}

export default withRouter(SongDetail);
