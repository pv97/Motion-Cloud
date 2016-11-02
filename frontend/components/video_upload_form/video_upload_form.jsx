import React from 'react';
import { Link, withRouter } from 'react-router';
import merge from 'lodash/merge'

class VideoUploadForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			description: "",
			url:""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount(){
		this.mountUploadInput();
	}

	mountUploadInput(){
		cloudinary.openUploadWidget(
      merge(
				{},window.CLOUDINARY_OPTIONS,
				{theme:'minimal',inline_container:'.upload-box'}
			),
      (error, results) => {
        if(!error){
          this.state[url] = results[0].url
        }
      }
		);
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
		const video = this.state;
		this.props.createVideo({video});
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

	// {this.renderErrors()}
	render() {
		return (
			<div className="video-upload-form-container">
				<h1>Upload a Video</h1>
					<form onSubmit={this.handleSubmit} className="upload-form-box">
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
							<div className = 'upload-box'/>
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
