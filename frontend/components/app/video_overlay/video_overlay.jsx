import { withRouter } from 'react-router';
import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { RaisedButton } from 'material-ui';

class VideoOverlay extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount(){
		this.setVideoQuery();
	}

	componentWillUpdate(){
		if(this.props.location.query.id!==this.props.query.id){
			this.setVideoQuery();
		}
	}

	setVideoQuery(){
		let videoId = this.props.location.query.id;
		if (videoId){
			this.props.setQuery(videoId);
		}
	}


	render() {
		let video = this.props.videos[this.props.query.id];
		let style = {"object-fit":"fill"}
		if (video) {
			return(
				<div className="video-dummy">

					<div className="video-overlay">

						<div className="comment-overlay">
							<div className="show-comment-button">
								<div className="comment-button-text"
									>COMMENTS</div>
							</div>
							<div className="comment-index">
								<p>
									Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment
								</p>
							</div>
						</div>

						<div className="video-player-box">
							<ReactPlayer className="video-player" url={video.url}
								height={432}
								width={768}
								playing controls/>
							<div className="video-details">
								<div className="video-title">{video.title}</div>
								<div className="video-view-count">Views: {video.view_count}</div>
								<div className="video-description">{video.description}</div>
								<div className="video-user-username">Uploaded by: {video.user.username}</div>
							</div>
						</div>
					</div>
				</div>
			)
		} else {
				return <div className="display-none"></div>
		}
	}
}

export default withRouter(VideoOverlay);
