import React from 'react';
import { Link } from 'react-router';

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
          <Link to="/home" className="header-link"><img src="http://res.cloudinary.com/duhmzsirt/image/upload/v1478652827/logo_kafhys.gif" id="logo"/><h1>DropCloud</h1></Link>
          <nav className="nav-bar">
            <ul id="">
              <li id="nav-sign-in">Log in</li>
              <li id="nav-sign-up">Sign up</li>
            </ul>
          </nav>
        </header>
        {children}
      </div>
  );
  }
}

export default App;
