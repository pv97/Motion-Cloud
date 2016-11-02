import React from 'react';
import { Link, withRouter } from 'react-router';

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
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
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

	render() {
		if(this.props.loggedIn){
			return (<div></div>)
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
				</form>
			</div>
		);
	}

}

export default withRouter(SessionForm);
