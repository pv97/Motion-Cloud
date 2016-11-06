import React from 'react';
import { withRouter } from 'react-router';

class CommentIndexItemChild extends React.Component {
  render() {

    return(
      <li className="child-comment-index-container">
        <div className="child-comment-details"></div>
          <div className="child-comment-user">
            {this.props.comment.user}
          </div>
          <div className="child-comment-time-ago">
            {this.props.comment.age}
          </div>
        <div className="child-comment-body">
          {this.props.comment.body}
        </div>
      </li>
    )
  }
}
export default withRouter(CommentIndexItemChild);
