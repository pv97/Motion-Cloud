import React from 'react';
import { withRouter } from 'react-router';
import { RaisedButton, TextField } from 'material-ui';

class UserNav extends React.Component {
	constructor(props) {
		super(props);
		this.toUploadVideo = this.toUploadVideo.bind(this);
		this.style = {
			"margin-left": 10
		};
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
		this.props.router.push({pathname:"/videos/new",query:{}});
	}

	render() {
		if(!this.props.loggedIn){
			return (<div className="display-none"></div>)
		}

		return (
			<div className="user-nav">
					<RaisedButton
						label={this.props.currentUser.username}
						style={this.style}
						onClick={this.toUploadVideo}/>
					<RaisedButton
						label="Upload"
						primary={true}
						style={this.style}
						onClick={this.toUploadVideo}/>
					<RaisedButton
						label="Log Out"
						secondary={true}
						style={this.style}
						onClick={this.props.logout}/>
			</div>
		);
	}

}

export default withRouter(UserNav);
