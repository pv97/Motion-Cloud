import React from 'react';
import { withRouter } from 'react-router';

class CommentItem extends React.Component {
  render() {
    let comment = this.props.comment
    return(
      <li className="parent-comment-container">
        <div className="parent-comment">
          <div className="parent-comment-details">
            <div className="parent-comment-user">
              {comment.user}
            </div>
            <div className="parent-comment-time-ago">
              Posted {comment.age} ago
            </div>
          </div>

          <div className="parent-comment-body">
            {comment.body}
          </div>
        </div>
      </li>
    )
  }
}
export default withRouter(CommentItem);
