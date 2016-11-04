import React from 'react';
import { withRouter } from 'react-router';
import merge from 'lodash/merge';

class VideoIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let videoId = this.props.video.id;
    let newQuery = merge({},this.props.query,{id:videoId});
    this.props.router.replace({pathname:"/",query:newQuery});
  }

  render() {
    let video = this.props.video;
    return (
      <div className="video-index-item" onClick={this.handleClick}>
        <img className="video-index-item-picture"src={video.thumbnail_url}/>
        <div className="video-index-item-detail">
          <p className="video-index-item-title">{video.title}</p>
          <p className="video-index-item-user">{video.user.username}</p>

          <div className="video-index-sub-details">
            <p className="video-index-view-count">Views: {video.view_count}</p>
            <p className="video-index-age">{video.age}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(VideoIndexItem);
