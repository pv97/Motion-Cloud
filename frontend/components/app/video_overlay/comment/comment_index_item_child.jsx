import React from 'react';
import { withRouter } from 'react-router';
import { RaisedButton, TextField } from 'material-ui';

class CommentIndexItemChild extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      replyFormClass:"display-none",
      body:""
    }
    this.toggleReplyForm = this.toggleReplyForm.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.toUserPage = this.toUserPage.bind(this)
  }

  toggleReplyForm(){
    let toggle = this.state.replyFormClass === "display-none"? "reply-form-box" : "display-none"
    this.setState({replyFormClass:toggle})
  }


	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  buttonClass(){
    if(this.state.body!==""){
      return "comment-button-section"
    } else {
      return "display-none"
    }
  }

  errors(){
		let errors = ""
		if(this.props.errors){
			if(this.props.errors.body){
				errors += "You must enter a comment! "
			}
			if(this.props.errors.base){
			  errors += "You must be logged in to comment!"
			}
		}
		return errors
	}

	handleSubmit(e) {
		e.preventDefault();
    const reply = {
      body: this.state.body,
      video_id: this.props.videoId,
      parent_comment_id: this.props.parentCommentId
    };
		this.setState({body:"", replyFormClass:"display-none"})
    this.props.createReply(reply);
	}

  toUserPage(){
    let query = this.props.location.query;
    this.props.router.push({pathname:`users/${this.props.comment.user_id}`,query});
  }

  render() {
    let comment = this.props.comment
    return(
      <div>

        <li className="child-comment-container">
          <div className="child-comment-details">
            <div className="child-comment-user" onClick={this.toUserPage}>
              {comment.user}
            </div>
            <div className="child-comment-time-ago">
              Posted {comment.age} ago
            </div>
          </div>

          <div className="child-comment-body">
            {comment.body}
          </div>

          <div className="reply-link-box">
            <div className="reply-link" onClick={this.toggleReplyForm}>Reply</div>
          </div>
        </li>

        <form onSubmit={this.handleSubmit} className={this.state.replyFormClass}>
          <TextField type="text"
            value={this.state.body}
            onChange={this.update("body")}
            errorText={this.errors()}
            floatingLabelText="Post a comment"
            multiLine={true}
            fullWidth/>
          <div className="flex-end">
  					<div className={this.buttonClass()}>
  						<RaisedButton className="comment-submit-button" value="Submit"
  							primary={true} label="Post Comment" onClick={this.handleSubmit} />
  					</div>
  				</div>
        </form>
      </div>
    )
  }
}
export default withRouter(CommentIndexItemChild);
