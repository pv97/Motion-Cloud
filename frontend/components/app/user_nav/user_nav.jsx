import React from 'react';
import { withRouter } from 'react-router';

class UserNav extends React.Component {
	constructor(props) {
		super(props);
		this.toUploadVideo = this.toUploadVideo.bind(this);
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

	toUploadVideo(e){
		e.preventDefault();
		this.props.router.push("/videos/new");
	}

	render() {
		if(!this.props.loggedIn){
			return (<div className="display-none"></div>)
		}

		return (
			<div className="user-nav">
				<h1>Hello {this.props.currentUser.username}</h1>
				<button onClick={this.toUploadVideo}>Upload</button>
        <button onClick={this.props.logout}>Log Out</button>
			</div>
		);
	}

}

export default withRouter(UserNav);
