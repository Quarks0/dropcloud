import React from 'react';
import { Link } from 'react-router';
import SongIndex from '../songs/song_index';

class App extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillReceiveProps(nextProps){
    if(!nextProps.currentUser){
      this.props.router.push('/');
    }
  }

  render() {
  let username = this.props.currentUser ? this.props.currentUser.username : "";
  return (
      <div>
        <header>
          <Link to="/home" className="header-link"><img src="https://res.cloudinary.com/duhmzsirt/image/upload/v1478652827/logo_kafhys.gif" className="logo"/><h3 className="header-title">DropCloud</h3></Link>
          <nav className="nav-bar">
            <button><img className="profile-pic" src="https://res.cloudinary.com/duhmzsirt/image/upload/v1478652827/default_profile_uon2xl.jpg"/>
            {username}</button>
            <button onClick={this.props.logout}>Log out</button>
          </nav>
        </header>

      </div>
  );
  }
}

export default App;
