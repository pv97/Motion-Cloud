import React from 'react';
import { withRouter } from 'react-router';
import { FontIcon, IconButton } from 'material-ui';

class QueueItem extends React.Component {
  constructor(props){
    super(props);
    this.removeFromQueue = this.removeFromQueue.bind(this)
  }

  removeFromQueue(){
		let pathname = this.props.location.pathname;
		let query = this.props.location.query;
    let idx = this.props.idx;
    let array = query.q.split("q");
		query.q = array.slice(0,idx).concat(array.slice(idx+1)).join("q");
    query.q = query.q === "" ? undefined : query.q;
		this.props.router.replace({pathname,query});
  }

	render() {
    let video = this.props.video
    return (
      <li className="queue-item">
        <IconButton
          className="remove-queue-button"
          tooltipPosition="bottom-center"
          tooltip="Remove From Queue"
          onClick={this.removeFromQueue}>
          <FontIcon className="material-icons" color={"#fff"} style={{fontSize:70}}
            >clear</FontIcon>
        </IconButton>
        <img className="queue-item-picture" src={video.thumbnail_url}></img>
      </li>
    )
	}
}

export default withRouter(QueueItem);
