import React from 'react';
import VideoIndexItem from './video_index_item';

const VideoIndex = ({ videoes }) => (
  <div>
    <h1>Videoes: </h1>
    {videoes.map(video => (
      <VideoIndexItem video={video} key={video.id} />
    ))}
  </div>
);

export default VideoIndex;
