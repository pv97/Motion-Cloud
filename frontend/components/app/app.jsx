import React from 'react';
import { Link } from 'react-router';
import SessionFormContainer from './session_form/session_form_container';
import UserNavContainer from './user_nav/user_nav_container';
import VideoOverlay from './video_overlay/video_overlay';

const App = ({ children }) => (
  <div>
    <header>
      <UserNavContainer />
      <SessionFormContainer />
    </header>
    <section className="main-section">
      <VideoOverlay/>
      {children}
    </section>
  </div>
);

export default App;
