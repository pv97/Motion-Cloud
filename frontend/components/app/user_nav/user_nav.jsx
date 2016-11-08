import React from 'react';
import { withRouter } from 'react-router';
import { RaisedButton, TextField } from 'material-ui';

class UserNav extends React.Component {
	constructor(props) {
		super(props);
		this.toUploadVideo = this.toUploadVideo.bind(this);
		this.toUserPage = this.toUserPage.bind(this);
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
		this.props.router.push({pathname:"/videos/new",query:this.props.query});
	}

	toUserPage(e){
		e.preventDefault();
		this.props.router.push({pathname:`/users/${this.props.currentUser.id}`,query:this.props.query});
	}

	render() {
		if(!this.props.loggedIn){
			return (<div className="display-none"></div>)
		}

		return (
			<div className="user-nav">
					<RaisedButton
						label={this.props.currentUser.username}
						onClick={this.toUserPage}/>
					<RaisedButton
						label="Upload"
						primary={true}
						style={{marginLeft:10}}
						onClick={this.toUploadVideo}/>
					<RaisedButton
						label="Log Out"
						secondary={true}
						style={{marginLeft:10}}
						onClick={this.props.logout}/>
			</div>
		);
	}

}

export default withRouter(UserNav);
