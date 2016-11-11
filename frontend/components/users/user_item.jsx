import React from 'react';
import {withRouter} from 'react-router';

class UserItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const imageURL = this.props.profile_url ? this.props.user.profile_url: "https://res.cloudinary.com/duhmzsirt/image/upload/v1478652827/default_profile_uon2xl.jpg";
    const handleClick = url => e => this.props.router.push(url);

    return (
    <div className="song-item" onClick={handleClick(`/home/users/${this.props.user.id}`)}>
      <img src={imageURL}/>
      <div className="song-item-text-container">
        <span className="song-item-text">{this.props.user.username}</span>
        <span className="song-item-text-user">{this.props.user.description}</span>
      </div>
    </div>
  );
  }
}

export default withRouter(UserItem);
