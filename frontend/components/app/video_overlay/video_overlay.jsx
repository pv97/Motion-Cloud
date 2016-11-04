import { withRouter } from 'react-router';
import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { RaisedButton } from 'material-ui';

class VideoOverlay extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			clickToShowComment:true,
			minimized:false
		}
		this.slideVideoBox = this.slideVideoBox.bind(this);
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

	buttonClass(){
		if (this.state.clickToShowComment){
			return "show-comment-button"
		} else {
			return "hide-comment-button"
		}
	}

	buttonText(){
		if (this.state.clickToShowComment){
			return "SHOW COMMENTS"
		} else {
			return "HIDE COMMENTS"
		}
	}

	videoBoxClass(){
		if (this.state.clickToShowComment){
			return "video-player-box"
		} else {
			return "video-player-box-right"
		}
	}

	slideVideoBox(){
		let opposite = this.state.clickToShowComment ? false : true;
		this.setState({clickToShowComment:opposite})
	}

	render() {
		let video = this.props.videos[this.props.query.id];
		let style = {"object-fit":"fill"}
		if (video) {
			if (this.state.minimized){
				return (
					<ReactPlayer className="video-player" url={video.url}
						height={2000}
						width={1125}
						playing controls/>
				)
			} else {
				return(
					<div className="video-dummy">

						<div className="video-overlay">

							<div className="comment-overlay">
								<div className={this.buttonClass()} onClick={this.slideVideoBox}>
									<div className="comment-button-text"
										>{this.buttonText()}</div>
								</div>
								<div className="comment-index">
									<p>
										Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment
									</p>
								</div>
							</div>

							<div className={this.videoBoxClass()}>
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
			}
		} else {
				return <div className="display-none"></div>
		}
	}
}

export default withRouter(VideoOverlay);
