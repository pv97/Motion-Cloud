import React from 'react';
import { withRouter } from 'react-router';

class CommentIndexItemChild extends React.Component {
  render() {

    return(
      <li className="comment-index-container">
        <div className="comment-details"></div>
          <div className="comment-user">
            {this.props.comment.user.username}
          </div>
          <div className="comment-time-ago">
            {this.props.comment.age}
          </div>
        <div className="comment-body">
          {this.props.comment.body}
        </div>
      </li>
    )
  }
}
export default withRouter(CommentIndexItemChild);
