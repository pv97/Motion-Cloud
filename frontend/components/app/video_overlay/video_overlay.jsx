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
					<div className="video-player-mini-box">

						<div className="player-buttons">
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
													style={{zIndex: 100}}
													playing controls/>
										</div>
										</div>
									</div>
								</div>


								<div className="video-details">
									<div className="video-title">{video.title}</div>
									<div className="video-user-view-details">
										<div className="video-user-username">Uploaded by {video.user}</div>
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
