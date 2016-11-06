import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {
  getComments(){
    let comments = [];
    Object.keys(this.props.comments).map((key)=>{
      if (key!=="errors") {
        comments.push(this.props.comments[key]);
      }
    })
    return comments;
  }

  render() {
    let comments = this.getComments();

    if(comments){
      return(
        <div className="comment-index-container">
          <ul className="comment-list">
            {comments.map(comment => (
              <CommentIndexItem comment={comment}
                key={comment.id}
                childComments={comment.child_comments}/>
            ))}
          </ul>
        </div>
      )
    } else {
      return(
        <div></div>
      )
    }
  }
}
export default CommentIndex;
