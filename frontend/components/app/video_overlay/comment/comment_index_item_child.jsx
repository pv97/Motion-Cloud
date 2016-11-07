import React from 'react';
import { withRouter } from 'react-router';
import ReplyFormContainer from './reply_form_container'

class CommentIndexItemChild extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      reply:"display-none"
    }
    this.toggleReplyForm = this.toggleReplyForm.bind(this)
  }

  toggleReplyForm(){
    let toggle = this.state.reply === "display-none"? "reply-form-box" : "display-none"
    this.setState({reply:toggle})
  }

  render() {
    let comment = this.props.comment
    return(
      <div>

        <li className="child-comment-container">
          <div className="child-comment-details">
            <div className="child-comment-user">
              {comment.user}
            </div>
            <div className="child-comment-time-ago">
              {comment.age}
            </div>
          </div>

          <div className="child-comment-body">
            {comment.body}
          </div>

          <div className="reply-link-box">
            <div className="reply-link" onClick={this.toggleReplyForm}>Reply</div>
          </div>
        </li>

        <ReplyFormContainer showClass={this.state.reply}
          parentCommentId={this.props.parentCommentId}
          videoId={this.props.comment}/>
      </div>
    )
  }
}
export default withRouter(CommentIndexItemChild);
