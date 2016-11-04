import React from 'react';
import VideoIndexItem from './video_index_item';

class VideoIndex extends React.Component {


  componentWillMount(){
    this.props.fetchVideos()
  }

  getVideos(){

  }

  render() {
    debugger
    let videos = this.props.videos;
    if(videos){
      return(
        <div>
          <h1 className="video-index-title">Trending Videos</h1>
          {videos.map(video => (
            <VideoIndexItem video={video} key={video.id} />
          ))}
        </div>
      )
    } else {
      return(
        <div></div>
      )
    }
  }
}
export default VideoIndex;
