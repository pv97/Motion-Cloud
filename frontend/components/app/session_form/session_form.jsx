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

		this.style = {
		  margin: 5
		};
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
				style={this.style}
				onClick={this.changeToSignup}></RaisedButton>;
		} else {
			return <RaisedButton
				label="Log in instead"
				secondary={true}
				style={this.style}
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
				/>

			<Popover
        open={this.state.open}
        anchorEl={this.state.anchorEl}
        anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
        onRequestClose={this.dropDownClose}>

				<form onSubmit={this.handleSubmit} className="sesion-form-box">
					{this.navButton()}
					<h1>
						{this.state.formType}
					</h1>
<br/>
					{this.renderErrors()}
					<div className="session-form">
<br/>
							<TextField
								id="username-input"
								placeholder="Username"
								value={this.state.username}
								onChange={this.update("username")}/>
<br/>
							<TextField
								id="password-input"
								placeholder="Password"
								value={this.state.password}
								type="password"
								onChange={this.update("password")}/>
<br/>
							<RaisedButton
								label="Submit"
								name="submit"
								type="submit"
								primary={true}
								style={this.style}
								onClick={this.handleSubmit}/>
						</div>
<br/>
						<RaisedButton
							label="Guest Log In"
							secondary={true}
							style={this.style}
							onClick={this.guestLogin}></RaisedButton>
<br/>
					</form>
				</Popover>
			</div>
		);
	}

}

export default withRouter(SessionForm);
