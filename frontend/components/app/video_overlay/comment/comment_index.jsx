import React from 'react';
import CommentIndexItem from './comment_index_item';
import CommentFormContainer from './comment_form_container';

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
        <ul className="comment-index-container">
          {comments.map(comment => (
            <CommentIndexItem comment={comment}
              key={comment.id}
              childComments={comment.child_comments}
              errors={this.props.errors}
              createReply={this.props.createReply}/>
          ))}
          <CommentFormContainer videoId={this.props.videoId}/>
        </ul>
      )
    } else {
      return(
        <div></div>
      )
    }
  }
}
export default CommentIndex;
