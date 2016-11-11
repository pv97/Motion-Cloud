import React from 'react';
import { withRouter } from 'react-router';

import VideoIndexItem from '../video_index/video_index_item';
import CommentItem from './comment_item';

class UserPage extends React.Component {
  constructor(props){
    super(props)
    this.state={
      show:"videos"
    }
    this.showVideos = this.showVideos.bind(this)
    this.showComments = this.showComments.bind(this)
  }

  commentsClass(){
    if(this.state.show==="videos"){
      return "display-none"
    } else {
      return "user-comments"
    }
  }

  videosClass(){
    if(this.state.show==="videos"){
      return "user-videos"
    } else {
      return "display-none"
    }
  }

  videosButtonClass(){
    if(this.state.show==="videos"){
      return "clicked"
    } else {
      return "show-user-video-button"
    }
  }

  commentsButtonClass(){
    if(this.state.show==="videos"){
      return "show-user-comment-button"
    } else {
      return "clicked"
    }
  }

  showVideos(){
    this.setState({show:"videos"})
  }

  showComments(){
    this.setState({show:"comments"})
  }

  render() {
    let user = this.props.user
    let videos = user.videos
    let comments = user.comments

    if(videos){
      return(
        <div id="user-page">
          <div id="user-page-nav">

            <div className="align-right">
              <div className="user-username">{user.username}</div>
            </div>

            <div className="align-right">
              <div className={this.videosButtonClass()} onClick={this.showVideos}>
                VIDEOS
              </div>
            </div>

            <div className="align-right">
              <div className={this.commentsButtonClass()} onClick={this.showComments}>
                COMMENTS
              </div>
            </div>
            <div className="anchor"></div>
          </div>

          <div id="user-page-main">

            <div className={this.commentsClass()}>
              <div id="user-comment-list">
                {comments.map(comment => (
                  <CommentItem comment={comment} key={comment.id}/>
                ))}
              </div>
            </div>

            <div className={this.videosClass()}>
              <div id="user-video-list">
                {videos.map(video => (
                  <VideoIndexItem video={video} key={video.id}/>
                ))}
              </div>
            </div>

          </div>
        </div>
      )
    } else {
      return(
        <div></div>
      )
    }
  }
}
export default withRouter(UserPage);
