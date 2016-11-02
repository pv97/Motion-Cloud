import React from 'react';
import { withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			formType:"Login",
			username: "",
			password: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.changeToSignup = this.changeToSignup.bind(this);
		this.changeToLogin = this.changeToLogin.bind(this);
		this.guestLogin = this.guestLogin.bind(this);
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = {
			username: this.state.username,
			password: this.state.password
		};
		if (this.state.formType==="Login"){
			this.props.login({user});
		} else {
			this.props.signup({user});
		}
	}

	changeToSignup(){
		this.setState({formType:"Sign Up"})
	}

	changeToLogin(){
		this.setState({formType:"Login"})
	}

	navButton() {
		if (this.state.formType === "Login") {
			return <button onClick={this.changeToSignup}>Sign up instead</button>;
		} else {
			return <button onClick={this.changeToLogin}>Log in instead</button>;
		}
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

	guestLogin(e){
		e.preventDefault();
		this.props.login({
			user:{
				formType:"Login",
				username: "Guest",
				password: "password"
			}
		});
	}

	render() {
		if(this.props.loggedIn){
			return (<div className="display-none"></div>)
		}

		return (
			<div className="session-form-container">
				<h1>
					{this.state.formType}
				</h1>
				{this.navButton()}
<br/>
				<form onSubmit={this.handleSubmit} className="sesion-form-box">
					{this.renderErrors()}
<br/>
					<div className="session-form">
						<label> Username:
<br/>
							<input type="text"
								value={this.state.username}
								onChange={this.update("username")}
								className="login-input" />
						</label>
<br/>
						<label> Password:
<br/>
							<input type="password"
								value={this.state.password}
								onChange={this.update("password")}
								className="login-input" />
						</label>
<br/>
						<input type="submit" value="Submit" />
					</div>
<br/>
					<button onClick={this.guestLogin}>Guest Log In</button>
<br/>
				</form>
			</div>
		);
	}

}

export default withRouter(SessionForm);
