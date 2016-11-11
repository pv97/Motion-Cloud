import { withRouter } from 'react-router';
import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { FontIcon, IconButton } from 'material-ui';
import CommentIndexContainer from './comment/comment_index_container'
import QueueContainer from './queue/queue_container'

class VideoOverlay extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			minimized:false,
			showQueue:false
		}
		this.slideVideoBox = this.slideVideoBox.bind(this);
		this.closeVideoBox = this.closeVideoBox.bind(this);
		this.toggleMini = this.toggleMini.bind(this);
		this.setMiniTurnary = this.setMiniTurnary.bind(this);
		this.setSlideTurnary = this.setSlideTurnary.bind(this);
		this.shiftVideoQueue = this.shiftVideoQueue.bind(this);
		this.toggleShowQueue = this.toggleShowQueue.bind(this);
		this.toUserPage = this.toUserPage.bind(this);
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
		if(
			queryString.id!==queryState.id ||
			queryString.c!==queryState.c ||
			queryString.q!==queryState.q
		){
			this.props.setQuery(queryString);
		}
	}

	shiftVideoQueue(){
		let pathname = this.props.location.pathname;
		let query = this.props.location.query;
		if(query.q){
			this.props.router.replace({pathname})
			let array = query.q.split("q");
			query.id = array.shift();
			query.q = array.length > 0 ? array.join("q") : undefined;
		}
		this.props.router.replace({pathname,query});
	}

	slideVideoBox(){
		let pathname = this.props.location.pathname;
		let query = this.props.location.query;
		query.c = query.c ? undefined : true;
		this.props.router.replace({pathname,query});
	}

	closeVideoBox(){
		let pathname = this.props.location.pathname;
		this.props.router.replace({pathname,query:{}});
	}

	toggleMini(){
		let opposite = this.state.minimized ? false : true;
		this.setState({minimized:opposite});
	}

	toggleShowQueue(){
		let opposite = this.state.showQueue ? false : true;
		this.setState({showQueue:opposite});
	}

	setMiniTurnary(falseValue,trueValue){
		return () => {
			if(this.state.minimized){
				return trueValue;
			} else {
				return falseValue;
			}
		}
	}

	setSlideTurnary(falseValue,trueValue){
		return () => {
			if (this.props.query.c){
				return trueValue;
			} else {
				return falseValue;
			}
		}
	}

	setQueueTurnary(falseValue,trueValue){
		return () => {
			if (this.state.showQueue){
				return trueValue;
			} else {
				return falseValue;
			}
		}
	}

	toUserPage(){
    let query = this.props.location.query;
    this.props.router.push({pathname:`users/${this.props.videos[this.props.query.id].user_id}`,query});
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
								<IconButton
									className={this.setMiniTurnary("collapse-button","expand-button")()}
									tooltipPosition={this.setMiniTurnary("bottom-center","top-center")()}
									tooltip={this.setMiniTurnary("Minimize","Maximize")()}
									onClick={this.toggleMini}
									style={{height:26,width:26}}>
									<FontIcon className="material-icons" color={"#fff"}
										>{this.setMiniTurnary("expand_more","expand_less")()}</FontIcon>
								</IconButton>
								<IconButton tooltip="Close"
									className="close-button"
									tooltipPosition={this.setMiniTurnary("bottom-center","top-center")()}
									onClick={this.closeVideoBox}
									style={{height:26,width:26}}>
									<FontIcon className="material-icons" color={"#fff"}
										>clear</FontIcon>
								</IconButton>
							</div>

							<div id="size-wrapper">
									<ReactPlayer id="video-player" url={video.url}
										height={"inherit"}
										width={"inherit"}
										style={{zIndex: 100}}
										onEnded={this.shiftVideoQueue}
										playing controls/>
							</div>

							<div className={this.setMiniTurnary("video-details","display-none")()}>
								<div id="video-title">{video.title}</div>

								<div id="detail-queue-toggle-buttons">
									<div className={this.setQueueTurnary("show-queue","clicked")()}
										onClick={this.toggleShowQueue}
										>{this.setQueueTurnary("SHOW QUEUE","SHOW DETAILS")()}</div>
								</div>

								<div className={this.setQueueTurnary("video-sub-details","display-none")()}>
									<div id="video-user-view-details">
										<div id="video-user-username" onClick={this.toUserPage}>Uploaded by {video.user}</div>
										<div id="video-view-count">{video.view_count} Views</div>
									</div>
									<div id="video-description">{video.description}</div>
								</div>

								<div className={this.setQueueTurnary("display-none","video-queue")()}>
									<QueueContainer />
								</div>
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
