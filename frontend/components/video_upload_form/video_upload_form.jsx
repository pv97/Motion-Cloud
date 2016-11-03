import React from 'react';
import { Link, withRouter } from 'react-router';
import merge from 'lodash/merge'
import { RaisedButton, TextField } from 'material-ui';

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
				{theme:'minimal',inline_container:'.upload-widget'}
			),
			(error, results) => {
				if(!error){
					this.uploadWidget.close();
					this.setState({
						url: results[0].url,
						thumbnail_url: results[0].thumbnail_url,
						uploadSuccess:"Successfully uploaded!"
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
			return "You must upload a video!"
		}
	}


	render() {
		return (
			<div className="video-upload-form-container">
				<h1>Upload a Video</h1>
<br/>
					<form onSubmit={this.handleSubmit} className="upload-form-box">
<br/>
						<div className="video-upload-form">
							{this.urlError()}
<br/>
							<TextField type="text"
								value={this.state.title}
								onChange={this.update("title")}
								errorText={this.titleError()}
    						floatingLabelText="Title"
								fullWidth/>
<br/>
							<TextField
								value={this.state.description}
								onChange={this.update("description")}
    						floatingLabelText="Description"
								fullWidth/>
							<div className = 'upload-box'>
								{this.renderUploadBox()}
							</div>
<br/>
							<RaisedButton value="Submit" primary={true} label="Upload Video" onClick={this.handleSubmit} />
						</div>
<br/>
	<br/>
		<br/>
			<br/>
				<br/>
					<br/>
						<br/>
							<br/>
								<br/>
									<br/>
										<br/>
											<br/>
												<br/>
													<br/>
														<br/>
															<br/>
																<br/>
																	<br/>
																		<br/>
																			<br/>
																				<br/>
																					<br/>
																						<br/>
																							<br/>
																								<br/>
																									<br/>

					</form>
			</div>
		);
	}

}

export default withRouter(VideoUploadForm);
