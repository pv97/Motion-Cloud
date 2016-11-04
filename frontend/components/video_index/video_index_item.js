import React from 'react';
import { hashHistory } from 'react-router';

class VideoIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const videoId = this.props.video.id;
    hashHistory.push(``);
  }

  render() {
    let video = this.props.video;

    return (
      <div className="video-index-item" onClick={this.handleClick}>
        <img src={thumbnail_url}/>
      </div>
    );
  }
}

export default VideoIndexItem;
