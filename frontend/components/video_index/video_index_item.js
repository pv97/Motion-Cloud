import React from 'react';
import { withRouter } from 'react-router';
import merge from 'lodash/merge';
import { FontIcon, IconButton, Snackbar } from 'material-ui';

class VideoIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleVideoClick = this.handleVideoClick.bind(this);
    this.handleQueueClick = this.handleQueueClick.bind(this);
    this.handleUserClick = this.handleUserClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  handleVideoClick() {
    let videoId = this.props.video.id;
    let pathname = this.props.location.pathname;
    let newQuery = merge({},this.props.query,{id:videoId});
    this.props.router.replace({pathname:pathname,query:newQuery});
  }

  handleQueueClick(event) {
    event.stopPropagation();
    let videoId = this.props.video.id;
    let pathname = this.props.location.pathname;
    let query = this.props.location.query;
    if(query.id){
      if(query.q){
        query.q = query.q + videoId + "q";
      } else {
        query.q = videoId + "q";
      }
    } else { //set current video instead
      query.id = videoId;
    }
    this.setState({open:true});
    this.props.router.replace({pathname:pathname,query:query});
  }

  handleUserClick() {
    let userId = this.props.video.user_id;
    let query = this.props.location.query;
    this.props.router.replace({pathname:`users/${userId}`,query:query});
  }

  handleRequestClose() {
    this.setState({open: false});
  };

  render() {
    let video = this.props.video;
    return (
      <div className="video-index-item-margin">
      <div className="video-index-item">

        <div className="play-icon-box" onClick={this.handleVideoClick}>
          <div className="picture-overlay">
            <div className="center-button">
              <FontIcon className="material-icons" color={"#fff"} style={{fontSize:70}}
                >play_circle_outline</FontIcon>
            </div>
            <div className="top-right-button">
              <IconButton
                className="queue-button"
                tooltipPosition="top-center"
                tooltip="Add to queue"
                onClick={this.handleQueueClick}>
                <FontIcon className="material-icons" color={"#fff"} style={{fontSize:70}}
                  >playlist_add</FontIcon>
              </IconButton>
            </div>
          </div>
          <img className="video-index-item-picture"src={video.thumbnail_url}  onClick={this.handleVideoClick}/>
        </div>

        <div className="video-index-item-detail">
          <p className="video-index-item-title" onClick={this.handleVideoClick}>{video.title}</p>
          <p className="video-index-item-user" onClick={this.handleUserClick}>{video.user}</p>

          <div className="video-index-view-age-detail">
            <p className="video-index-view-count">{video.view_count} Views</p>
            <p className="video-index-age">Uploaded {video.age} ago</p>
            <p className="video-index-description">{video.description}</p>
          </div>

        </div>
      </div>

      <Snackbar
        open={this.state.open}
        message="Added video to your queue!"
        autoHideDuration={3000}
        style={{textAlign:"center"}}
        onRequestClose={this.handleRequestClose}
      />
    </div>
    );
  }
}

export default withRouter(VideoIndexItem);
