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

      </li>
    )
  }
}
export default withRouter(CommentIndexItem);

// {this.getChildComments()}
