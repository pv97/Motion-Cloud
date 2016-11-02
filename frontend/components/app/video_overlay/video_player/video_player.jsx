import { withRouter } from 'react-router';
import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class VideoPlayer extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount(){
		this.setVideoQuery();
	}

	setVideoQuery(){
		let videoId = this.props.location.query.id;
		if (videoId){
			this.props.setQuery(videoId);
		}
	}

	// componentWillUpdate(){
	// 	debugger
	// }
	//
	// fetchVideoQuery(){
	// 	debugger
	// 	let videoId = this.props.query.id;
	// 	if (videoId){
	// 		this.props.fetchVideo(videoId);
	// 	}
	// }

	videoPlayer(){
		let video = this.props.videos[this.props.query.id];
		// debugger
		if (video) {
			return <ReactPlayer url={video.url} playing controls/>
		} else {
			return <div className="display-none"></div>
		}
	}

	render() {
		if(false){
			return (<div className="display-none"></div>);
		}

		return (
			<div className="video-player-box">
				hihi
				{this.props.query.id}
				{this.videoPlayer()}
			</div>
		);
	}

}

export default withRouter(VideoPlayer);
