import { withRouter } from 'react-router';
import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { FontIcon, IconButton } from 'material-ui';
import CommentIndexContainer from './comment/comment_index_container'

class VideoOverlay extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			clickToShowComment:true,
			minimized:false
		}
		this.slideVideoBox = this.slideVideoBox.bind(this);
		this.closeVideoBox = this.closeVideoBox.bind(this);
		this.toggleMini = this.toggleMini.bind(this);
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
		this.props.setQuery(videoId);
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

	closeVideoBox(){
		let pathname = this.props.location.pathname
		this.props.router.replace({pathname,query:{}})
	}

	toggleMini(){
		let opposite = this.state.minimized ? false : true;
		this.setState({minimized:opposite})
	}

	render() {
		let video = this.props.videos[this.props.query.id];
		if (video) {
			if (this.state.minimized){

				return (
					<div className="video-player-mini-box">

						<div className="player-buttons">
							<IconButton tooltip="Expand"
								className="expand-button"
								tooltipPosition="top-center"
								onClick={this.toggleMini}>
								<FontIcon className="material-icons" color={"#fff"}
									>expand_more</FontIcon>
							</IconButton>
							<IconButton tooltip="Close"
								className="close-button"
								tooltipPosition="top-center"
								onClick={this.closeVideoBox}>
								<FontIcon className="material-icons" color={"#fff"}
									>clear</FontIcon>
							</IconButton>
						</div>

						<ReactPlayer className="video-player-mini" url={video.url}
							height={180}
							width={320}
							playing controls/>
					</div>
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
									<CommentIndexContainer videoId={this.props.query.id}/>
								</div>

							</div>

							<div className={this.videoBoxClass()}>

								<div className="player-buttons">
									<IconButton tooltip="Collapse"
										className="collapse-button"
										tooltipPosition="top-center"
										onClick={this.toggleMini}>
										<FontIcon className="material-icons" color={"#fff"}
											>expand_more</FontIcon>
									</IconButton>
									<IconButton tooltip="Close"
										className="close-button"
										tooltipPosition="top-center"
										onClick={this.closeVideoBox}>
										<FontIcon className="material-icons" color={"#fff"}
											>clear</FontIcon>
									</IconButton>
								</div>
								<div className="margin-wrapper">
									<div className="ratio-wrapper">
										<div className="center-wrapper">
											<div className="height-wrapper">
												<ReactPlayer className="video-player" url={video.url}
													height={"inherit"}
													width={"inherit"}
													playing controls/>
										</div>
										</div>
									</div>
								</div>


								<div className="video-details">
									<div className="video-title">{video.title}</div>
									<div className="video-user-view-details">
										<div className="video-user-username">Uploaded by {video.user.username}</div>
										<div className="video-view-count">{video.view_count} Views</div>
									</div>
									<div className="video-description">{video.description}</div>
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
