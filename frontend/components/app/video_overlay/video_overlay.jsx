import React from 'react';
import { Link } from 'react-router';
import VideoPlayer from './video_player/video_player_container';

const App = props => (
  <div>
    <header>
      <VideoPlayer />
    </header>
  </div>
);

export default App;
