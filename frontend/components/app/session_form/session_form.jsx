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

				onClick={this.changeToSignup}/>;
		} else {
			return <RaisedButton
				label="Log in instead"
				secondary={true}
				className="log-in-button"
				onClick={this.changeToLogin}/>;
		}
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

	usernameError(){
		if(this.props.errors.username){
			return this.props.errors.username[0]
		}
	}

	passwordError(){
		if(this.props.errors.password){
			return this.props.errors.password[0]
		}
	}

	mainError(){
		if(this.props.errors.main){
			return <div id="main-session-error">{this.props.errors.main}</div>
		}
		return <br/>
	}

	render() {
		if(this.props.loggedIn){
			return (<div className="display-none"></div>)
		}
		return (
			<div className="session-form-container">
				<RaisedButton
					onClick={this.dropDownOpen}
					label="Login / Sign Up"
					id="login-signup-button"
				/>

				<Popover className="session-form-popover"
	        open={this.state.open}
	        anchorEl={this.state.anchorEl}
	        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
	        targetOrigin={{horizontal: 'right', vertical: 'top'}}
	        onRequestClose={this.dropDownClose}>

					<div id="login-header">
						{this.navButton()}
					</div>

					<form onSubmit={this.handleSubmit} id="sesion-form-box">
						<div id="login-title">
							{this.state.formType}
						</div>
						<br/>
						{this.mainError()}
						<div id="session-form">
							<TextField
      					floatingLabelText="Username"
								fullWidth
								errorText={this.usernameError()}
								value={this.state.username}
								onChange={this.update("username")}/>
							<TextField
      					floatingLabelText="Password"
								fullWidth
								errorText={this.passwordError()}
								value={this.state.password}
								type="password"
								onChange={this.update("password")}/>
						</div>
						<br/>
					<div id="session-form-button-box">
						<RaisedButton
							label="Submit"
							type="submit"
							primary={true}
							onClick={this.handleSubmit}/>
						<RaisedButton
							label="Guest Log In"
							secondary={true}
							onClick={this.guestLogin}/>
					</div>
					</form>
				</Popover>
			</div>
		);
	}

}

export default withRouter(SessionForm);
