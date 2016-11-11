import React from 'react';
import {withRouter} from 'react-router';

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
        <button className="user-detail-button" onClick={this.openModal.bind(this, "edit")}>Edit</button>
      );
    }
  }

  breakfix(){
    console.log(this.props);
    if (this.props.user){
      const imageURL = (this.props.user && this.props.user.profile_url) !== "" ? this.props.user.profile_url : "https://res.cloudinary.com/duhmzsirt/image/upload/v1478652827/default_profile_uon2xl.jpg";
      return (
        <section className="user-detail-container">
          <div className="song-detail">
            <img src={imageURL}/>
            <div className="song-detail-text-box">
              <span className="song-detail-text">Username: {this.props.user.username}</span>
              <span className="song-detail-text">Description: {this.props.user.description}</span>
              <span className="song-detail-text">Email: {this.props.user.email}</span>
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
            {this.props.user.songs.map((song, i) => (
                <li key={i}>{song.title} - {song.artist}</li>
            ))}
          </ul>
          <ul className="user-comments-container">
            {this.props.user.comments.map((comment, i) => (
                <li key={i}>{comment.song.title}: {comment.body}</li>
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
