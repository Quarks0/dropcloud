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
			this.props.router.push("/home");
		}
	}

	clearFields(){
	 this.setState({username: '', password:'', email:''});
 	}

	emailInput() {
		if (this.props.formType === "signup") {
			return (
				<label> Email  
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

	startUsernameAnimation(){
		if(this.state.username.length > 0 || this.state.password.length > 0){
			this.clearFields();
		}

		const demoUser = 'Guest';
		let usernameID = setInterval(() => {
			document.getElementById('username').focus();
			let currLength = this.state.username.length;

			if(currLength < demoUser.length){
				this.setState({username: this.state.username + demoUser.slice(currLength, currLength + 1)});
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
		return e => this.setState({[field]: e.currentTarget.value});
	}

	render() {
		const errors = this.props.errors.map((error, i) =>(
			<li key={i} className="form-error">{error}</li>
		));

		const type = this.props.formType === "login" ? "Log in" : "Sign up";

		return (
			<div className="session-form-container">
				<h4>{type}</h4>
				<form onSubmit={this.handleSubmit} className="session-form">

					<ul>{errors}</ul>
					<div className="login-form">
						<br/>
						<label> Username
							<input type="text"
								id="username"
								value={this.state.username}
								onChange={this.update("username")}
								className="login-input" />
						</label>
						<br/>
						<label> Password
							<input type="password"
								id="password"
								value={this.state.password}
								onChange={this.update("password")}
								className="login-input" />
						</label>
						<br/>
						{this.emailInput()}
						<br/>
						<input type="submit" value="Submit" />
						<br/>
					</div>
				</form>
				<button className='form-button'
					onClick={this.startUsernameAnimation.bind(this)}
					>Demo Account</button>
			</div>
		);
	}

}

export default withRouter(SessionForm);
