import React from 'react';
import {withRouter} from 'react-router';

import Modal from 'react-modal';
import {loginModalStyle} from '../../util/modal_styles';
import SongFormContainer from '../songs/song_form_container';
import CommentItemContainer from './comment_item_container';

class SongDetail extends React.Component{
  constructor(props){
    super(props);

    this.state={songModal: false, formType: "", body: "", user_id: null, song_id:null};

    this.handleDelete = this.handleDelete.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
    this.editandDeleteButtons = this.editandDeleteButtons.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.breakfix = this.breakfix.bind(this);
    this.update = this.update.bind(this);
  }

  openModal(type){
    this.setState({songModal: true, formType: type, body: "", user_id: null, song_id:null});
  }

  closeModal(){
    this.setState({songModal: false, formType: "", body: "", user_id: null, song_id:null});
  }

  togglePlay(e){
    e.stopPropagation();
    if (this.props.song.url === this.props.currentSong.url) {
      this.props.play ? this.props.pauseSong() : this.props.playSong(this.props.song);
    }else {
      this.props.playSong(this.props.song);
    }
  }

  editandDeleteButtons() {
    if (this.props.song.user.id == this.props.currentUser.id){
      return(
        <div className="song-detail-controls">
          <button className="form-button" onClick={this.openModal.bind(this, "edit")}>Edit</button>
          <button className="song-detail-delete" onClick={this.handleDelete}>Delete</button>
        </div>
      );
    }
  }

  handleDelete() {
    this.props.deleteSong(this.props.params.songId);
    this.props.router.push('/home');
  }

  handleSubmit(e){
    e.preventDefault();
    const comment = {body: this.state.body,
      user_id: this.props.currentUser.id,
      song_id: this.props.song.id};
    this.props.createComment({comment});
    this.setState({songModal: false, formType: "", body: "", user_id: null, song_id:null});
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value});
  }

  breakfix(){
    if (this.props.song){
      const imgURL = (this.props.song && this.props.song.image_url !== "") ? this.props.song.image_url : "http://res.cloudinary.com/duhmzsirt/image/upload/v1480975823/note-white_lfmcpm.png";
      return (
        <section className="song-detail-container">
          <div className="song-detail">
            <div className="underlay"><div className="play-button"><img className="album-art" src={imgURL} onClick={this.togglePlay}/></div></div>
            <div className="song-detail-text-box">
              <span className="song-detail-text">{this.props.song.title} - {this.props.song.artist}</span>
              <span className="song-detail-text-user">Uploaded by: {this.props.song.user.username}</span>
              {this.editandDeleteButtons()}
            </div>


            <Modal isOpen={this.state.songModal} onRequestClose={this.closeModal.bind(this)}
              style={loginModalStyle}>

              <SongFormContainer
                closeModal={this.closeModal.bind(this)}
                clearErrors={this.props.clearSongErrors}
                formType={this.state.formType}
                song={this.props.song}/>
            </Modal>
          </div>

          <div className="song-comments-container">
              <form onSubmit={this.handleSubmit} className="comment-form">
                  <h4>Add Comment:</h4>
                  <textarea className="comment-textbox" value={this.state.body} onChange={this.update("body")}/>
                  <input className='form-button' type='submit' value='Submit' />
              </form>

              <h4>Comments</h4>
              <ul className="song-comments">
                {this.props.song.comments.map((comment, i) => (
                  <li key={i}><CommentItemContainer comment={comment} currentUser={this.props.currentUser}/></li>
                ))}
              </ul>
          </div>

        </section>
      );
    } else{
      return (<div></div>);
    }
  }

  render (){
    return(
      <div>
        {this.breakfix()}
      </div>
    );
  }
}

export default withRouter(SongDetail);
