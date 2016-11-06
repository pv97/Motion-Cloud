import React from 'react';
import { withRouter } from 'react-router';
import merge from 'lodash/merge';
import { FontIcon } from 'material-ui';

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
      <div className="video-index-item-margin">
      <div className="video-index-item">
        <img className="video-index-item-picture"src={video.thumbnail_url}  onClick={this.handleClick}>
        </img>

        <button className="play-icon-box" onClick={this.handleClick}>
          <FontIcon className="material-icons" color={"#fff"} style={{fontSize:70}}
            >play_circle_outline</FontIcon>
        </button>

        <div className="video-index-item-detail">
          <p className="video-index-item-title"  onClick={this.handleClick}>{video.title}</p>
          <p className="video-index-item-user">{video.user}</p>

          <div className="video-index-view-age-detail">
            <p className="video-index-view-count">{video.view_count} Views</p>
            <p className="video-index-age">{video.age}</p>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default withRouter(VideoIndexItem);
