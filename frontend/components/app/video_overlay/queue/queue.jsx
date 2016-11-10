import React from 'react';
import QueueItem from './queue_item';

class Queue extends React.Component {
	render() {
    let queue = this.props.query.q
    if(queue && queue !== ""){
      let array = queue.split("q");
      return (
        <ul className="video-queue-list">
          {
            array.map((videoId,idx)=>{
              if(videoId===""){
                return <div className="display-none"></div>
              } else {
                return <QueueItem key={videoId+idx} video={this.props.videos[videoId]} idx={idx}/>
              }
            })
          }
        </ul>
      )
    } else {
      return <div className="display-none"></div>
    }
	}
}

export default Queue;
