import React from 'react';
import { withRouter } from 'react-router';

import VideoIndexItem from '../video_index/video_index_item';

class Search extends React.Component {

  getVideos(){
    let videos = [];
    Object.keys(this.props.search).map((key)=>{
      if (key!=="errors") {
        videos.push(this.props.search[key]);
      }
    })
    return videos;
  }

  render() {
    let videos = this.getVideos()

    if(videos){
      return(
        <div id="search-page">
          <div id="search-page-main">

            <div className="videos">
              <div id="search-video-list">
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
        <div id="search-page">
          <div id="search-page-main">
            <div className="no-results">
              No videos found, please try broadening your search.
            </div>
          </div>
        </div>
      )
    }
  }
}
export default withRouter(Search);
