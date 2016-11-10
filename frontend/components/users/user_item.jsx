import React from 'react';
import {withRouter} from 'react-router';

class UserItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const imageURL = this.props.profile_url === "" ? "https://res.cloudinary.com/duhmzsirt/image/upload/v1478652827/default_profile_uon2xl.jpg" : this.props.user.profile_url;
    const handleClick = url => e => this.props.router.push(url);

    return (
    <div className="user-item" onClick={handleClick(`/home/users/${this.props.user.id}`)}>
      <img src={imageURL}/>
      <span className="user-item-text">
        {this.props.user.username} - {this.props.user.description}
      </span>
    </div>
  );
  }
}

export default withRouter(UserItem);
