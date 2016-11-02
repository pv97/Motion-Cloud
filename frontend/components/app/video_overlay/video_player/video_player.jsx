import React from 'react';
import { Link, withRouter } from 'react-router';

class VideoPlayer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		if(false){
			return (<div className="display-none"></div>)
		}

		return (
			<div className="video-player-box">

			</div>
		);
	}

}

export default withRouter(VideoPlayer);
