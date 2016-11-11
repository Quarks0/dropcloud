import React from 'react';

class UserForm extends React.Component{
  constructor(props){
    super(props);

    this.state = this.props.user || {password: "", description: "", profile_url: "", email: ""};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.clearFields = this.clearFields.bind(this);
    this.uploadButtons = this.uploadButtons.bind(this);
  }

  componentWillReceiveProps(newProps){
    this.setState(newProps.user || {password: "", description: "", profile_url: "", email: ""});
  }

  update(field){
  	return e => this.setState({[field]: e.currentTarget.value});
  }

  uploadButtons(){
    return (
      <div>
        <button className='form-button'
          onClick={this.openCloudinaryWidget.bind(this,"image")}
          >Upload profile image (optional)</button>
        <br/>
      </div>
    );
  }

  openCloudinaryWidget(type,e){
    e.preventDefault();
    cloudinary.openUploadWidget({
      cloud_name: 'duhmzsirt',
      upload_preset: 'thkagmlk',
      theme:"minimal"
    }, function (error, results) {
      if (!error) {
        this.setState({profile_url: results[0].url});
      }
    }.bind(this));
  }

  clearFields(){
    this.setState({password: "", description: "", profile_url: ""});
  }

  handleSubmit(e){
    e.preventDefault();
    const img = this.state.profile_url === "" ? null : this.state.profile_url;
    const user = {id: this.props.currentUser.id,
      description: this.state.description,
      profile_url: img,
      email: this.state.email};
    this.props.updateUser({user});
  }

  render(){
    const errors = this.props.errors.map((error, i) =>(
			<li key={i} className="form-error">{error}</li>
		));

		return (
			<div className="session-form-container">
				<h4>Edit Information</h4>

        {this.uploadButtons()}

				<form onSubmit={this.handleSubmit} className="session-form">
          <ul>{errors}</ul>
        	<div className="login-form">
						<label> <h5>Description</h5>
							<input type="text"
								value={this.state.description}
								onChange={this.update("description")}
								className="login-input" />
						</label>
						<br/>
						<label> <h5>Email</h5>
							<input type="text"
								value={this.state.email}
								onChange={this.update("email")}
								className="login-input" />
						</label>
						<br/>
						<input className='form-button' type="submit" value="Submit" />
					</div>
				</form>
			</div>
		);
  }
}

export default UserForm;
