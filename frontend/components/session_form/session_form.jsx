import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			email: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.update = this.update.bind(this);
    // this.getAltText = this.getAltText.bind(this);
		this.emailInput = this.emailInput.bind(this);
		this.clearFields = this.clearFields.bind(this);

		if(this.props.demo){
      this.startUsernameAnimation();
    }
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

	clearFields(){
	 this.setState({username: '', password:''});
 	}

	emailInput() {
		if (this.props.formType === "signup") {
			return (
				<label> Email:
					<input type="text"
						value={this.state.email}
						onChange={this.update("email")}
						className="login-input" />
				</label>
			);
		}
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.formType === "login" ? this.props.login({user}) : this.props.signup({user});
	}

	navLink() {
		if (this.props.formType === "login") {
			return <Link to="/signup">sign up instead</Link>;
		} else {
			return <Link to="/login">log in instead</Link>;
		}
	}

	startUsernameAnimation(){
		if(this.state.username.length > 0 || this.state.password.length > 0){
			this.clearFields();
		}

		const demoGuest = 'Guest';
		let usernameID = setInterval(() => {
			document.getElementById('username').focus();
			let currLength = this.state.username.length;

			if(currLength < demoGuest.length){
				this.setState({username: this.state.username + demoGuest.slice(currLength, currLength + 1)});
			} else{
				clearInterval(usernameID);
				this.startPasswordAnimation();
			}
		}, 100);
	}

	startPasswordAnimation(){
		const demoPassword = 'password';
		let passwordID = setInterval(() => {
			document.getElementById('password').focus();
			let currLength = this.state.password.length;

			if(currLength < demoPassword.length){
				this.setState({password: this.state.password + demoPassword.slice(currLength, currLength + 1)});
			} else{
				clearInterval(passwordID);
				const user = this.state;
				this.props.login({user});
			}
		}, 100);
	}


	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render() {
		return (
			<div className="login-form-container">
				<form onSubmit={this.handleSubmit} className="login-form-box">


					<br/>
					Please {this.props.formType} or {this.navLink()}
					{this.renderErrors()}
					<div className="login-form">
						<br/>
						<label> Username:
							<input type="text"
								id="username"
								value={this.state.username}
								onChange={this.update("username")}
								className="login-input" />
						</label>
						<br/>
						<label> Password:
							<input type="password"
								id="password"
								value={this.state.password}
								onChange={this.update("password")}
								className="login-input" />
						</label>
						{this.emailInput()}
						<br/>
						<input type="submit" value="Submit" />
						<a
                className='form-button'
                id="demo-form-btn"
                onClick={this.startUsernameAnimation.bind(this)}
                >Demo Account</a>
					</div>
				</form>
			</div>
		);
	}

}

export default withRouter(SessionForm);
