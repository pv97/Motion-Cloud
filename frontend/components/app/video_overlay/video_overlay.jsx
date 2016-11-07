import { withRouter } from 'react-router';
import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { FontIcon, IconButton } from 'material-ui';
import CommentIndexContainer from './comment/comment_index_container'

class VideoOverlay extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			minimized:false
		}
		this.slideVideoBox = this.slideVideoBox.bind(this);
		this.closeVideoBox = this.closeVideoBox.bind(this);
		this.toggleMini = this.toggleMini.bind(this);
	}

	componentDidMount(){
		this.callVideoQuery();
	}

	componentDidUpdate(){
		this.updateQuery();
	}

	updateQuery(){
		let queryString = this.props.location.query;
		let queryState = this.props.query;
		if(queryString.id!==queryState.id || queryString.c!==queryState.c){
			this.callVideoQuery();
		}
	}

	callVideoQuery(){
		let queryString = this.props.location.query;
		this.props.setVideoQuery(queryString.id, queryString.c);
	}

	buttonClass(){
		if (this.props.query.c){
			return "hide-comment-button"
		} else {
			return "show-comment-button"
		}
	}

	buttonText(){
		if (this.props.query.c){
			return "HIDE COMMENTS"
		} else {
			return "SHOW COMMENTS"
		}
	}

	videoBoxClass(){
		if (this.props.query.c){
			return "video-player-box-right"
		} else {
			return "video-player-box"
		}
	}

	slideVideoBox(){
		let pathname = this.props.location.pathname
		let query = this.props.location.query
		query.c = query.c ? undefined : true;
		this.props.router.replace({pathname,query:query})
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
					<div id="video-player-mini-box">

						<div id="player-buttons">
							<IconButton tooltip="Expand"
								className="expand-button"
								tooltipPosition="top-center"
								onClick={this.toggleMini}>
								<FontIcon className="material-icons" color={"#fff"}
									>expand_less</FontIcon>
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
							style={{zIndex: 100}}
							playing controls/>
					</div>
				)

			} else {
				return(
					<div id="video-dummy">
						<div id="video-overlay">

							<div id="comment-overlay">

								<div className={this.buttonClass()} onClick={this.slideVideoBox}>
									<div id="comment-button-text"
										>{this.buttonText()}</div>
								</div>

								<div id="comment-index">
									<CommentIndexContainer videoId={this.props.query.id}/>
								</div>

							</div>

							<div id={this.videoBoxClass()}>

								<div id="player-buttons">
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
								<div id="margin-wrapper">
									<div id="ratio-wrapper">
										<div id="center-wrapper">
											<div id="height-wrapper">
												<ReactPlayer id="video-player" url={video.url}
													height={"inherit"}
													width={"inherit"}
													style={{zIndex: 100}}
													playing controls/>
										</div>
										</div>
									</div>
								</div>


								<div id="video-details">
									<div id="video-title">{video.title}</div>
									<div id="video-user-view-details">
										<div id="video-user-username">Uploaded by {video.user}</div>
										<div id="video-view-count">{video.view_count} Views</div>
									</div>
									<div id="video-description">{video.description}</div>
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
