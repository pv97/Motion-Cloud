import React from 'react';
import { withRouter } from 'react-router';
import merge from 'lodash/merge';
import { FontIcon } from 'material-ui';

class VideoIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleUserClick = this.handleUserClick.bind(this);
  }

  handleClick() {
    let videoId = this.props.video.id;
    let pathname = this.props.location.pathname;
    let newQuery = merge({},this.props.query,{id:videoId});
    this.props.router.replace({pathname:pathname,query:newQuery});
  }

  handleUserClick() {
    let userId = this.props.video.user_id;
    let query = this.props.location.query;
    this.props.router.replace({pathname:`users/${userId}`,query:query});
  }

  render() {
    let video = this.props.video;
    return (
      <div className="video-index-item-margin">
      <div className="video-index-item">

        <div className="play-icon-box" onClick={this.handleClick}>
          <div className="zero-height">
            <div className="center-icon">
              <FontIcon className="material-icons" color={"#fff"} style={{fontSize:70}}
                >play_circle_outline</FontIcon>
            </div>
          </div>
          <img className="video-index-item-picture"src={video.thumbnail_url}  onClick={this.handleClick}/>
        </div>

        <div className="video-index-item-detail">
          <p className="video-index-item-title" onClick={this.handleClick}>{video.title}</p>
          <p className="video-index-item-user" onClick={this.handleUserClick}>{video.user}</p>

          <div className="video-index-view-age-detail">
            <p className="video-index-view-count">{video.view_count} Views</p>
            <p className="video-index-age">Uploaded {video.age} ago</p>
            <p className="video-index-description">{video.description}</p>
          </div>

        </div>
      </div>
    </div>
    );
  }
}

export default withRouter(VideoIndexItem);
