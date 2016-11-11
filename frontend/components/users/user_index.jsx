import React from 'react';
import UserItemContainer from './user_item_container';
import { Link } from 'react-router';

class UserIndex extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="song-index">
        <div className="song-sidebar">
          <h3><Link to={`/home`} className="link">Songs</Link></h3>
          <h3 className="current-index">Users</h3>
        </div>
        <ul className="song-item-container">
          {this.props.users.map((user, i) => (
            <li key={i}><UserItemContainer user={user}/></li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserIndex;
