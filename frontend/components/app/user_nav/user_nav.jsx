import React from 'react';
import { Link, withRouter } from 'react-router';

class UserNav extends React.Component {
	constructor(props) {
		super(props);
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

	render() {
		if(!this.props.loggedIn){
			return (<div></div>)
		}

		return (
			<div className="user-nav">
				<h1>Hello {this.props.currentUser.username}</h1>
        <button onClick={this.props.logout}>Log Out</button>
			</div>
		);
	}

}

export default withRouter(UserNav);
