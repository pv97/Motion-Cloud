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
		this.setMiniTurnary = this.setMiniTurnary.bind(this);
		this.setSlideTurnary = this.setSlideTurnary.bind(this);
	}

	componentDidMount(){
		this.updateQuery();
	}

	componentDidUpdate(){
		this.updateQuery();
	}

	updateQuery(){
		let queryString = this.props.location.query;
		let queryState = this.props.query;
		if(queryString.id!==queryState.id){
			this.props.setVideoQuery(queryString.id);
		}
		if(queryString.c!==queryState.c){
			this.props.setCommentQuery(queryString.c);
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

	setMiniTurnary(falseValue,trueValue){
		return () => {
			if(this.state.minimized){
				return trueValue
			} else {
				return falseValue
			}
		}
	}

	setSlideTurnary(falseValue,trueValue){
		return () => {
			if (this.props.query.c){
				return trueValue
			} else {
				return falseValue
			}
		}
	}

	render() {
		let video = this.props.videos[this.props.query.id];
		if (video) {
			return(
				<div id={this.setMiniTurnary("video-dummy","video-dummy-fixed")()}>
					<div id="video-overlay">

						<div className={this.setMiniTurnary("comment-overlay","display-none")()}>

							<div className={this.setSlideTurnary("show-comment-button","hide-comment-button")()} onClick={this.slideVideoBox}>
								<div id="comment-button-text"
									>{this.setSlideTurnary("SHOW COMMENTS","HIDE COMMENTS")()}</div>
							</div>

							<div id="comment-index">
								<CommentIndexContainer videoId={this.props.query.id}/>
							</div>

						</div>

						<div id={this.setSlideTurnary("video-player-box","video-player-box-right")()}>

							<div id="player-buttons">
								<IconButton tooltip="Collapse"
									className={this.setMiniTurnary("collapse-button","expand-button")()}
									tooltipPosition="top-center"
									onClick={this.toggleMini}>
									<FontIcon className="material-icons" color={"#fff"}
										>{this.setMiniTurnary("expand_more","expand_less")()}</FontIcon>
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

							<div className={this.setMiniTurnary("video-details","display-none")()}>
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
		} else {
			return <div className="display-none"></div>
		}
	}
}

export default withRouter(VideoOverlay);
