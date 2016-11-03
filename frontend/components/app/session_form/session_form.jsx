import React from 'react';
import { withRouter } from 'react-router';
import { RaisedButton, TextField, Popover } from 'material-ui';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			formType:"Login",
			open: false
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.changeToSignup = this.changeToSignup.bind(this);
		this.changeToLogin = this.changeToLogin.bind(this);
		this.guestLogin = this.guestLogin.bind(this);
		this.dropDownOpen = this.dropDownOpen.bind(this);
		this.dropDownClose = this.dropDownClose.bind(this);


	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		this.setState({
			 open: false,
		 });
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
			return <RaisedButton
				label="Sign up instead"
				secondary={true}
				className="sign-up-button"
				onClick={this.changeToSignup}></RaisedButton>;
		} else {
			return <RaisedButton
				label="Log in instead"
				secondary={true}
				className="log-in-button"
				onClick={this.changeToLogin}></RaisedButton>;
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
		this.setState({
			 open: false,
		 });
		this.props.login({
			user:{
				formType:"Login",
				username: "Guest",
				password: "password"
			}
		});
	}

	dropDownOpen(e){
		e.preventDefault();
    this.setState({
      open: true,
      anchorEl: e.currentTarget
    });
	}

	dropDownClose(){
		 this.setState({
			 open: false,
		 });
	 };


	render() {

		if(this.props.loggedIn){
			return (<div className="display-none"></div>)
		}

		return (
			<div className="session-form-container">
				<RaisedButton
					onClick={this.dropDownOpen}
					label="Login / Sign Up"
					className="login-signup-button"
				/>

			<Popover className="session-form-popover"
	        open={this.state.open}
	        anchorEl={this.state.anchorEl}
	        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
	        targetOrigin={{horizontal: 'right', vertical: 'top'}}
	        onRequestClose={this.dropDownClose}>

					<div className="login-header">
						{this.navButton()}
						<div className="login-title">
							{this.state.formType}
						</div>
					</div>
					<form onSubmit={this.handleSubmit} className="sesion-form-box">
						{this.renderErrors()}
<br/>
						<div className="session-form">
							<TextField
								id="username-input"
								placeholder="Username"
								fullWidth
								value={this.state.username}
								onChange={this.update("username")}/>
<br/>
							<TextField
								id="password-input"
								placeholder="Password"
								value={this.state.password}
								fullWidth
								type="password"
								onChange={this.update("password")}/>
						</div>
<br/>
					<div className="session-form-button-box">
						<RaisedButton
							label="Submit"
							type="submit"
							primary={true}
							onClick={this.handleSubmit}/>
						<RaisedButton
							label="Guest Log In"
							secondary={true}
							onClick={this.guestLogin}></RaisedButton>
					</div>
<br/>
					</form>
				</Popover>
			</div>
		);
	}

}

export default withRouter(SessionForm);
