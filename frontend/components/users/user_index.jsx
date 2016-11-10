import React from 'react';
import UserItemContainer from './user_item_container';

class UserIndex extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="user-index">
        <h3>User Index</h3>
        <ul>
          {this.props.users.map((user, i) => (
            <li key={i}><UserItemContainer user={user}/></li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserIndex;
