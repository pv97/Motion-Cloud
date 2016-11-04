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
    const { average_rating, description, thumbnail_url } = this.props.video;

    return (
      <div className="video-index-item"
           onClick={this.handleClick}>

        </div>
        <img src={thumbnail_url}/>
      </div>
    );
  }
}

export default IndexItem;
