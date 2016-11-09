import React from 'react';
import { Link, withRouter } from 'react-router';

import Modal from 'react-modal';
import {loginModalStyle} from '../../util/modal_styles';
import SessionFormContainer from '../session_form/session_form_container';

document.addEventListener('DOMContentLoaded', () => {
  Modal.setAppElement(document.body);
});

class Greeting extends React.Component{
  constructor(props){
    super(props);

    this.state = {loginModal: false, formType: ""};
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.currentUser && nextProps.currentUser.id){
      this.props.router.push('/home');
    }
  }

  openModal(type){
    this.props.clearErrors();
    this.setState({loginModal: true, formType: type});
  }

  closeModal(){
    this.setState({loginModal: false, formType: ""});
  }

  render () {
    return(
      <div>
        <header className="greeting-header">
          <Link to="/home" className="header-link"><img src="https://res.cloudinary.com/duhmzsirt/image/upload/v1478652827/logo_kafhys.gif" className="logo"/><h3 className="header-title">DropCloud</h3></Link>
          <nav className="nav-bar">
            <button onClick={this.openModal.bind(this,"login", false)}>Log In</button>
            <button onClick={this.openModal.bind(this,"signup", false)}>Sign Up</button>
          </nav>
        </header>
        <main className="overview">
          <h1>This is DropCloud</h1>
          <br/>
          <p className="overview-body">
            A collection of songs with only the heaviest of drops
          </p>
          <br/>
          <button onClick={this.openModal.bind(this,"login", true)}>Check it out</button>
        </main>
        <Modal isOpen={this.state.loginModal} onRequestClose={this.closeModal.bind(this)}
          style={loginModalStyle}>

          <SessionFormContainer formType={this.state.formType} closeModal={this.closeModal}
            clearErrors={this.props.clearErrors}/>

        </Modal>
      </div>
    );
  }
}

export default Greeting;
