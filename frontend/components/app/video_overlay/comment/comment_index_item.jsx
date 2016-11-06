import React from 'react';
import CommentIndexItemChild from './comment_index_item_child';
import { withRouter } from 'react-router';

class CommentIndexItem extends React.Component {

  getChildComments(){
    let childComments = [];
    Object.keys(this.props.childComments).map((key)=>{
      childComments.push(
          <CommentIndexItemChild comment={this.props.childComments[key]}
            key={comment.id}/>
        );
    })
    if(childComments.length>0){
      return (
        <ul className="child-comment-list">
          {childComments}
        </ul>
      )
    } else {
      return <div className="display-none"></div>
    }
  }

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

        {this.getChildComments()}
      </li>
    )
  }
}
export default withRouter(CommentIndexItem);
