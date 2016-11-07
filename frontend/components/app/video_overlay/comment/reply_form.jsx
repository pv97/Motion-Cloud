import React from 'react';
import { withRouter } from 'react-router';
import { RaisedButton, TextField } from 'material-ui';

class ReplyForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			body:"",
      show:false
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
    const reply = {
      body: this.state.body,
      video_id: this.props.videoId,
      parent_comment_id: this.props.parentCommentId
    };
		this.setState({body:""})
    this.props.createReply(reply);
	}


	errors(){
		let errors = ""
		if(this.props.errors.body){
			errors += "You must enter a comment! "
		}
		if(this.props.errors.base){
		  errors += "You must be logged in to comment!"
		}
		return errors
	}

	buttonClass(){
		if(this.state.body!==""){
			return "comment-button-section"
		} else {
			return "invisible"
		}
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit} className={this.props.showClass}>
				<TextField type="text"
					value={this.state.body}
					onChange={this.update("body")}
					errorText={this.errors()}
					floatingLabelText="Post a comment"
					multiLine={true}
					fullWidth/>
				<div className={this.buttonClass()}>
					<RaisedButton className="comment-submit-button" value="Submit"
						primary={true} label="Post Comment" onClick={this.handleSubmit} />
				</div>
			</form>
		);
	}

}

export default withRouter(ReplyForm);
