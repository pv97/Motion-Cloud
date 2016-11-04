import React from 'react';
import { Provider } from 'react-redux';

// react router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// react components
import App from './app/app';
import VideoUploadFormContainer from './video_upload_form/video_upload_form_container';
import VideoIndexContainer from './video_index/video_index_container';

//material ui
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const Root = ({ store }) => {

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={VideoIndexContainer}/>
          <Route path="/videos/new" component={VideoUploadFormContainer}/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
