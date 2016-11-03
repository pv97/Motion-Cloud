import { withRouter } from 'react-router';
import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { RaisedButton } from 'material-ui';

class VideoOverlay extends React.Component {
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


	render() {
		let video = this.props.videos[this.props.query.id];
		if (video) {
			return(
				<div className="video-overlay">

					<div className="comment-overlay">
						<div className="show-comment-button">test</div>
						<div className="comment-index">
							<p>
								Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment
							</p>
						</div>
					</div>

					<div className="video-player-box">
						<ReactPlayer className="video-player" url={video.url}
							playing controls/>
					</div>
				</div>
			)
		} else {
				return <div className="display-none"></div>
		}
	}
}

export default withRouter(VideoOverlay);
