import React from 'react';
import { withRouter } from 'react-router';

class CommentItem extends React.Component {
  constructor(props){
    super(props)
    this.openVideo = this.openVideo.bind(this)
  }

  openVideo(){
    let videoId = this.props.video.id;
    let pathname = this.props.location.pathname;
    let query = this.props.location.query;
    query.id = videoId;
    this.props.router.replace({pathname,query});
  }

  render() {
    let comment = this.props.comment;
    let title;
    if(this.props.video){
      title = this.props.video.title;
    }
    return(
      <li className="comment-container">
        <div className="comment">
          <div className="comment-details">
            <div className="comment-video" onClick={this.openVideo}>
              {title}
            </div>
            <div className="comment-time-ago">
              Posted {comment.age} ago
            </div>
          </div>

          <div className="comment-body">
            {comment.body}
          </div>
        </div>
      </li>
    )
  }
}
export default withRouter(CommentItem);
