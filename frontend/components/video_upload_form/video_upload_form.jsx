import React from 'react';
import { Link, withRouter } from 'react-router';
import merge from 'lodash/merge'

class VideoUploadForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			description: "",
			url:"",
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
				{theme:'minimal',inline_container:'.upload-widget'}
			),
			(error, results) => {
				if(!error){
					this.state.url = results[0].url
					this.uploadWidget.close();
					this.setState({uploadSuccess:"Successfully uploaded!"});
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
			this.props.router.push("/");
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
			url: this.state.url
		};
		console.log(video)
		this.props.createVideo(video);
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

	renderUploadBox() {
		if(this.state.uploadSuccess === ""){
			return <div className = 'upload-widget'/>
		} else {
			return <div className = 'upload-success'>Successfully Uploaded!</div>
		}
	}

	render() {
		return (
			<div className="video-upload-form-container">
				<h1>Upload a Video</h1>
<br/>
					<form onSubmit={this.handleSubmit} className="upload-form-box">
						{this.renderErrors()}
<br/>
						<div className="video-upload-form">
							<label> Title:
<br/>
								<input type="text"
									value={this.state.title}
									onChange={this.update("title")}
									className="login-input" />
							</label>
<br/>
							<label> Description:
<br/>
								<textarea
									value={this.state.description}
									onChange={this.update("description")}
									className="login-input" />
							</label>
<br/>
							<div className = 'upload-box'>
								{this.renderUploadBox()}
							</div>
<br/>
							<input type="submit" value="Submit" />
						</div>
<br/>
					</form>
			</div>
		);
	}

}

export default withRouter(VideoUploadForm);
