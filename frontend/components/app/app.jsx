import React from 'react';
import { Link } from 'react-router';
import SongIndex from '../songs/song_index';

class App extends React.Component{
  constructor(props){
    super(props);
  }

  openModal(){

  }

  closeModal(){

  }

  handleSubmit(){

  }

  //Need way to toggle nav bar
  // profile img url http://res.cloudinary.com/duhmzsirt/image/upload/v1478652827/default_profile_uon2xl.jpg

  render() {

  return (
      <div>
        <header>
          <Link to="/home" className="header-link"><img src="http://res.cloudinary.com/duhmzsirt/image/upload/v1478652827/logo_kafhys.gif" className="logo"/><h3 className="header-title">DropCloud</h3></Link>
          <nav className="nav-bar">
            <button onClick={this.openModal.bind(this,"login", false)}>Log In</button>
            <button onClick={this.openModal.bind(this,"signup", false)}>Sign Up</button>
          </nav>
        </header>
        <SongIndex />
      </div>
  );
  }
}

export default App;
