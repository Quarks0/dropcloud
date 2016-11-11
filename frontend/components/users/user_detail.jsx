import React from 'react';
import {Link, withRouter} from 'react-router';

import Modal from 'react-modal';
import {loginModalStyle} from '../../util/modal_styles';
import UserFormContainer from '../users/user_form_container';

class UserDetail extends React.Component{
  constructor(props){
    super(props);

    this.state={userModal: false};

    this.editButton = this.editButton.bind(this);
    this.breakfix = this.breakfix.bind(this);
  }

  openModal(type){
    this.setState({userModal: true});
  }

  closeModal(){
    this.setState({userModal: false});
  }

  editButton() {
    if (this.props.params.userId == this.props.currentUser.id){
      return(
        <button className="form-button" onClick={this.openModal.bind(this, "edit")}>Edit</button>
      );
    }
  }

  breakfix(){
    if (this.props.user){
      const imageURL = (this.props.user && this.props.user.profile_url) !== "" ? this.props.user.profile_url : "https://res.cloudinary.com/duhmzsirt/image/upload/v1478652827/default_profile_uon2xl.jpg";
      return (
        <section className="user-detail-container">
          <div className="song-detail">
            <img src={imageURL}/>
            <div className="song-detail-text-box">
              <span className="song-detail-text">Username: {this.props.user.username}</span>
              <span className="song-detail-text">Email: {this.props.user.email}</span>
              <span className="song-detail-text-user">Description: {this.props.user.description}</span>
              {this.editButton()}
            </div>
          </div>

          <Modal isOpen={this.state.userModal} onRequestClose={this.closeModal.bind(this)}
            style={loginModalStyle}>
            <UserFormContainer
              closeModal={this.closeModal}
              clearUserErrors={this.props.clearUserErrors}
              user={this.props.user}/>
          </Modal>

          <ul className="user-songs-container">
            <h3>Uploaded songs</h3>
            {this.props.user.songs.map((song, i) => (
                <li key={i} className="user-song-item"><Link className="link" to={`/home/songs/${song.id}`}>{song.title} - {song.artist}</Link></li>
            ))}
          </ul>
          <ul className="user-songs-container">
            <h3>Comments</h3>
            {this.props.user.comments.map((comment, i) => (
                <li key={i} className="user-song-item"><Link className="link" to={`/home/songs/${comment.song.id}`}>{comment.song.title} - {comment.song.artist}: "{comment.body}"</Link></li>
            ))}
          </ul>

        </section>
      );
    }else{
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

export default UserDetail;
