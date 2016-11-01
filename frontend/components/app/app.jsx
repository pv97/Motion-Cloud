import React from 'react';
import { Link } from 'react-router';
import SessionFormContainer from './session_form/session_form_container';
import UserNavContainer from './user_nav/user_nav_container';

const App = ({ children }) => (
  <div>
    <header>
      <UserNavContainer />
      <SessionFormContainer />
    </header>
    {children}
  </div>
);

export default App;
