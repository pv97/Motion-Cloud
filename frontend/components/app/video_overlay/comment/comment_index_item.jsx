import React from 'react';
import CommentIndexItemChild from './comment_index_item_child';
import { withRouter } from 'react-router';
import { RaisedButton, TextField } from 'material-ui';

class CommentIndexItem extends React.Component {
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
    let toggle = this.state.replyFormClass === "display-none" ? "reply-form-box" : "display-none"
    this.setState({replyFormClass:toggle})
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
      video_id: this.props.comment.video_id,
      parent_comment_id: this.props.comment.id
    };
		this.setState({body:"",replyFormClass:"display-none"})
    this.props.createReply(reply);
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

  buttonClass(){
    if(this.state.body!==""){
      return "comment-button-section"
    } else {
      return "display-none"
    }
  }

  getChildComments(){
    let childComments = this.props.childComments
    if(childComments.length>0){

      return (
        <ul className="child-comment-index">
          {
            childComments.map(comment => (
              <CommentIndexItemChild comment={comment}
                key={comment.id}
                videoId={this.props.comment.video_id}
                parentCommentId={this.props.comment.id}
                errors={this.props.errors}
                createReply={this.props.createReply}/>
            ))
          }
        </ul>
      )
    } else {
      return <div className="display-none"></div>
    }
  }

  toUserPage(){
    let query = this.props.location.query;
    this.props.router.push({pathname:`users/${this.props.comment.user_id}`,query});
  }

  render() {
    let childComments = this.props.childComments;
    let comment = this.props.comment
    return(
      <li className="parent-comment-container">
        <div className="parent-comment">
          <div className="parent-comment-details">
            <div className="parent-comment-user" onClick={this.toUserPage}>
              {comment.user}
            </div>
            <div className="parent-comment-time-ago">
              Posted {comment.age} ago
            </div>
          </div>

          <div className="parent-comment-body">
            {comment.body}
          </div>

          <div className="reply-link-box">
            <div className="reply-link" onClick={this.toggleReplyForm}>Reply</div>
          </div>
        </div>

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

        {this.getChildComments()}
      </li>
    )
  }
}
export default withRouter(CommentIndexItem);
