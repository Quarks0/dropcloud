import React from 'react';
import {withRouter} from 'react-router';

class SongForm extends React.Component{
  constructor(props){
    super(props);

    this.state = this.props.song || {title: "", artist: "", url:"", user_id: null, image_url: ""};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.uploadButtons = this.uploadButtons.bind(this);
  }

  componentWillReceiveProps(newProps){
    this.setState(newProps.song || {id: null,title: "", artist: "", url:"", user_id: null, image_url: ""});
  }

  openCloudinaryWidget(type,e){
    e.preventDefault();
    const field = type === "image" ? "image_url" : "url";
    cloudinary.openUploadWidget({
      cloud_name: 'duhmzsirt',
      upload_preset: 'thkagmlk',
      theme:"minimal"
    }, function (error, results) {
      if (!error) {
        this.setState({[field]: results[0].url});
      }
    }.bind(this));
  }

  update(field){
  	return e => this.setState({[field]: e.currentTarget.value});
  }

  uploadButtons(){
    if (this.props.formType === "upload"){
      return(
        <div>
          <button className='form-button'
            onClick={this.openCloudinaryWidget.bind(this,"song")}
            >Upload Song</button>
          <br/>

          <button className='form-button'
            onClick={this.openCloudinaryWidget.bind(this,"image")}
            >Upload image (optional)</button>
          <br/>
        </div>
      );
    }
  }

  handleSubmit(e){
    e.preventDefault();
    const img = this.state.image_url === "" ? null : this.state.image_url;
    const song = {id: this.state.id,
      title: this.state.title,
      artist: this.state.artist,
      url: this.state.url,
      user_id: this.props.currentUser.id,
      image_url: img};
    this.props.formType === "edit" ? this.props.updateSong({song}) : this.props.createSong({song});
    this.props.formType === "edit" ? this.props.router.push(`/home/songs/${song.id}`) : this.props.router.push("/home");
    this.props.closeModal();
  }

  render(){
    const errors = this.props.errors.map((error, i) =>(
			<li key={i} className="form-error">{error}</li>
		));

		const type = this.props.formType === "upload" ? "Upload" : "Edit";

		return (
			<div className="session-form-container">
				<h4>{type}</h4>

        {this.uploadButtons()}

				<form onSubmit={this.handleSubmit} className="session-form">
          <ul>{errors}</ul>
        	<div className="login-form">
						<label><h5>Title</h5>
							<input type="text"
								value={this.state.title}
								onChange={this.update("title")}
								className="login-input" />
						</label>
						<br/>
						<label> <h5>Artist</h5>
							<input type="text"
								value={this.state.artist}
								onChange={this.update("artist")}
								className="login-input" />
						</label>
						<br/>
						<input className='form-button'  type="submit" value="Submit" />
					</div>
				</form>
			</div>
		);
  }
}

export default withRouter(SongForm);
