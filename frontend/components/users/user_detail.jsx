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
  }

  openModal(type){
    this.setState({userModal: true});
  }

  closeModal(){
    this.setState({userModal: false});
  }

  componentWillMount(){
    this.props.requestUser(this.props.params.userId);
  }

  editButton() {
    if (this.props.params.userId == this.props.currentUser.id){
      return(
        <button className="user-detail-button" onClick={this.openModal.bind(this, "edit")}>Edit</button>
      );
    }
  }

  render (){
    const imageURL = this.props.user.profile_url === "" ? "https://res.cloudinary.com/duhmzsirt/image/upload/v1478652827/default_profile_uon2xl.jpg" : this.props.user.profile_url;
    return(
      <section className="user-detail">
        <img src={imageURL}/>
        <span className="user-detail-text">Username: {this.props.user.username}</span>
        <span className="user-detail-text">Description: {this.props.user.description}</span>
        <span className="user-detail-text">Email: {this.props.user.email}</span>

        {this.editButton()}

        <Modal isOpen={this.state.userModal} onRequestClose={this.closeModal.bind(this)}
          style={loginModalStyle}>
          <UserFormContainer
            closeModal={this.closeModal}
            clearUserErrors={this.props.clearUserErrors}
            user={this.props.user}/>
        </Modal>

        <ul className="user-comments-container">
          {this.props.user.comments.map((comment, i) => (
              <li key={i}>{comment.body} - {comment.song.title}</li>
          ))}
        </ul>

      </section>
    );
  }
}

export default UserDetail;
