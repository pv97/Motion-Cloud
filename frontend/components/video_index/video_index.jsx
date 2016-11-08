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
        <div id="video-index-container">
          <div id="featured-channel">

            <div id="background">
              <div id="blank-left"></div>
              <div className="picture"></div>
              <div id="blank-right"></div>
            </div>

            <div id="lense">
              <div id="black-left">
                <div>
                  Featured Channel
                  <div id="featured-channel-name">Kurzgesagt</div>
                </div>
              </div>
              <div id="gradient-left"></div>
              <div id="clear"></div>
              <div id="gradient-right"></div>
              <div id="black-right"></div>
            </div>


          </div>

          <h1 id="video-index-title">Trending Videos</h1>
          <div id="video-list">
            {videos.map(video => (
              <VideoIndexItem video={video} key={video.id}/>
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
