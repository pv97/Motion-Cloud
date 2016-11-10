import React from 'react';
import VideoIndexItem from './video_index_item';
import { withRouter } from 'react-router';

class VideoIndex extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      featureTimer:0,
      featured:[
        {class:"picture1",videoId:"1",name:"How Far Will We Go?"},
        {class:"picture2",videoId:"2",name:"Atoms As Big As Mountains"},
        {class:"picture3",videoId:"3",name:"What is Light?"},
        {class:"picture4",videoId:"4",name:"How the Stock Exchange Works"},
        {class:"picture5",videoId:"5",name:"How Big is the Moon?"}
      ]
    }
    this.onSplashClick = this.onSplashClick.bind(this)
    this.onChannelClick = this.onChannelClick.bind(this)
  }

  componentWillMount(){
		this.addSplashTimer();
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  onSplashClick(){
    let videoId = this.state.featured[this.state.featureTimer].videoId
    let query = this.props.location.query;
    query.id = videoId
    this.props.router.replace({pathname:`/`,query});
  }

  onChannelClick(e){
    e.stopPropagation();
    let query = this.props.location.query;
    this.props.router.replace({pathname:`/users/2`,query});
  }

	addSplashTimer(){
		this.interval = setInterval(
			()=>{
				let nextTimer = (this.state.featureTimer + 1)%5
				this.setState({featureTimer:nextTimer})
			}
			,4000)
	}

  getVideos(){
    let videos = [];
    Object.keys(this.props.videos).map((key)=>{
      if (key!=="errors" && videos.length<16) {
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
          <div id="featured-channel"  onClick={this.onSplashClick}>

            <div id="background">
              <div id="blank-left"></div>
              <div className={this.state.featured[this.state.featureTimer].class}></div>
              <div id="blank-right"></div>
            </div>

            <div id="lense">
              <div id="black-left">
                <div>
                  Featured Channel
                  <div id="featured-channel-name"  onClick={this.onChannelClick}>Kurzgesagt</div>
                  <div id="featured-video-name">{this.state.featured[this.state.featureTimer].name}</div>
                </div>
              </div>
              <div id="gradient-left"></div>
              <div id="clear"></div>
              <div id="gradient-right"></div>
              <div id="black-right"></div>
            </div>

          </div>

          <h1 id="video-index-title">Watch While Exploring</h1>
          <div id="video-list-section">
            <div id="list-gradient-left"></div>
            <div id="video-list">
              {videos.map(video => (
                <VideoIndexItem video={video} key={video.id}/>
              ))}
            </div>
            <div id="list-gradient-right"></div>
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
export default withRouter(VideoIndex);
