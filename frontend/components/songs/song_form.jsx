import React from 'react';

class SongForm extends React.Component{
  constructor(props){
    super(props);

    this.state = this.props.song || {title: "", artist: "", url:"", user_id: null, image_url: ""};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.clearFields = this.clearFields.bind(this);
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

  clearFields(){
    this.setState({title: "", artist: "", url:"", user_id: null, image_url: ""});
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
  }

  render(){
    console.log(this.state);
    const errors = this.props.errors.map((error, i) =>(
			<li key={i} className="form-error">{error}</li>
		));

		const type = this.props.formType === "upload" ? "Upload" : "Edit";

		return (
			<div className="song-form-container">
				<h4>{type}</h4>

        <ul>{errors}</ul>
        <br/>

        {this.uploadButtons()}

				<form onSubmit={this.handleSubmit} className="session-form">
        	<div className="song-form">
						<label> Title
							<input type="text"
								value={this.state.title}
								onChange={this.update("title")}
								className="song-input" />
						</label>
						<br/>
						<label> Artist
							<input type="text"
								value={this.state.artist}
								onChange={this.update("artist")}
								className="song-input" />
						</label>
						<br/>
						<input type="submit" value="Submit" />
					</div>
				</form>
			</div>
		);
  }
}

export default SongForm;
