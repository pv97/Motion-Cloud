import React from 'react';
import VideoIndexItem from './video_index_item';

class VideoIndex extends React.Component {


  componentWillMount(){
    this.props.fetchVideos();
  }

  getVideos(){
    let videos = [];
    Object.keys(this.props.videos).map((key)=>{
      if (key!=="errors") {
        videos.push(this.props.videos[key]);
      }
    })
    return videos;
  }

  render() {
    let videos = this.getVideos();

    if(videos){
      return(
        <div className="video-index-container">
          <h1 className="video-index-title">Trending Videos</h1>
          <div className="video-list">
            {videos.map(video => (
              <VideoIndexItem video={video} key={video.id} setQuery={this.props.setQuery}/>
            ))}
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
export default VideoIndex;
