import React from 'react';
import CommentIndexItemChild from './comment_index_item_child';
import { withRouter } from 'react-router';

class CommentIndexItem extends React.Component {

  getChildComments(){
    let childComments = this.props.childComments
    if(childComments.length>0){

      return (
        <ul className="child-comment-index">
          {
            childComments.map(comment => (
              <CommentIndexItemChild comment={comment}
                key={comment.id}/>
            ))
          }
        </ul>
      )
    } else {
      return <div className="display-none"></div>
    }
  }

  render() {
    let childComments = this.props.childComments;

    return(
      <li className="parent-comment-container">
        <div className="parent-comment">
          <div className="parent-comment-details">
            <div className="parent-comment-user">
              {this.props.comment.user}
            </div>
            <div className="parent-comment-time-ago">
              {this.props.comment.age}
            </div>
          </div>

          <div className="parent-comment-body">
            {this.props.comment.body}
          </div>
        </div>

        {this.getChildComments()}
      </li>
    )
  }
}
export default withRouter(CommentIndexItem);
