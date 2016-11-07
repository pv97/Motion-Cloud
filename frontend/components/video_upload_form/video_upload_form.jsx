import React from 'react';
import { withRouter } from 'react-router';
import merge from 'lodash/merge'
import { RaisedButton, TextField } from 'material-ui';
import theme from './upload_widget_theme'

class VideoUploadForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			description: "",
			url:"",
			thumbnail_url:"",
			uploadSuccess:""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount(){
		this.mountUploadInput();
	}

	mountUploadInput(){
		this.uploadWidget = cloudinary.createUploadWidget(
			merge(
				{},window.CLOUDINARY_OPTIONS,
				{
					stylesheet:theme,
					inline_container:'.upload-widget'}
			),
			(error, results) => {
				if(!error){
					this.uploadWidget.close();
					this.setState({
						url: results[0].url,
						thumbnail_url: results[0].thumbnail_url,
						uploadSuccess:"Successfully uploaded!",

					});
					console.log(this.state);
				}
			}
		);
		this.uploadWidget.open();
	}

	componentDidUpdate() {
		this.redirectIfNotLoggedIn();
	}

	redirectIfNotLoggedIn() {
		if (!this.props.loggedIn) {
			this.props.router.push({pathname:"/",query:this.props.query});
		}
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const video = {
			title: this.state.title,
			description: this.state.description,
			url: this.state.url,
			thumbnail_url: this.state.thumbnail_url
		};
		console.log(video)
		this.props.createVideo(video);
	}

	renderUploadBox() {
		if(this.state.uploadSuccess === ""){
			return <div className = 'upload-widget'/>
		} else {
			return <div className = 'upload-success'>Successfully Uploaded!</div>
		}
	}

	titleError(){
		if(this.props.errors.title){
			return "You must have a title!"
		}
	}

	urlError(){
		if(this.props.errors.url){
			return <div className="upload-error">You must upload a video!</div>
		} else {
			return <br/>
		}
	}


	render() {
		return (
			<div className="video-upload-form-container">
					<form onSubmit={this.handleSubmit} className="upload-form-box">
						<h1 className="upload-video-title">Upload a Video</h1>
						<TextField type="text"
							value={this.state.title}
							onChange={this.update("title")}
							errorText={this.titleError()}
  						floatingLabelText="Title"
							fullWidth/>
						<TextField
							value={this.state.description}
							onChange={this.update("description")}
  						floatingLabelText="Description"
							multiLine={true}
							fullWidth/>
<br/>
						{this.urlError()}
						<div className = 'upload-box'>
							{this.renderUploadBox()}
						</div>
<br/>
						<div className="video-requirements">
							<p className="upload-maximum-size">
								Maximum video size: &nbsp; 42mb
							</p>
							<p className="upload-formats">
								Accepted formats: &nbsp; webm mkv flv vob avi mp4 mpeg
							</p>
						</div>
<br/>
						<RaisedButton value="Submit" primary={true} label="Upload Video"
							style={{zIndex:0, position:"static"}} onClick={this.handleSubmit} />
					</form>

			</div>
		);
	}

}

export default withRouter(VideoUploadForm);
