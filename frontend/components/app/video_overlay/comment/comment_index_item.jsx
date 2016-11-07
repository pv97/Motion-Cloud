import React from 'react';
import CommentIndexItemChild from './comment_index_item_child';
import ReplyFormContainer from './reply_form_container';
import { withRouter } from 'react-router';

class CommentIndexItem extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      reply:"display-none"
    }
    this.toggleReplyForm = this.toggleReplyForm.bind(this)
  }

  getChildComments(){
    let childComments = this.props.childComments
    if(childComments.length>0){

      return (
        <ul className="child-comment-index">
          {
            childComments.map(comment => (
              <CommentIndexItemChild comment={comment}
                key={comment.id} parentCommentId={this.props.comment.id}/>
            ))
          }
        </ul>
      )
    } else {
      return <div className="display-none"></div>
    }
  }

  toggleReplyForm(){
    let toggle = this.state.reply === "display-none"? "reply-form-box" : "display-none"
    this.setState({reply:toggle})
  }

  render() {
    let childComments = this.props.childComments;
    let comment = this.props.comment
    return(
      <li className="parent-comment-container">
        <div className="parent-comment">
          <div className="parent-comment-details">
            <div className="parent-comment-user">
              {comment.user}
            </div>
            <div className="parent-comment-time-ago">
              {comment.age}
            </div>
          </div>

          <div className="parent-comment-body">
            {comment.body}
          </div>

          <div className="reply-link-box">
            <div className="reply-link" onClick={this.toggleReplyForm}>Reply</div>
          </div>
        </div>

        <ReplyFormContainer showClass={this.state.reply}
          parentCommentId={comment.id}
          videoId={comment.video_id}/>

        {this.getChildComments()}
      </li>
    )
  }
}
export default withRouter(CommentIndexItem);
