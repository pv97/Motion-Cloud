import React from 'react';
import { Provider } from 'react-redux';

// react router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// react components
import AppContainer from './app/app_container';
import VideoUploadFormContainer from './video_upload_form/video_upload_form_container';
import UserPageContainer from './user_page/user_page_container';
import VideoIndexContainer from './video_index/video_index_container';
import SearchContainer from './search/search_container';

//material ui
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import { fetchUser } from '../actions/user_actions'

const requestUser = (nextState) => {
  store.dispatch(fetchUser(nextState.params.userId))
}

const Root = ({ store }) => {

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={AppContainer}>
          <IndexRoute component={VideoIndexContainer}/>
          <Route path="/users/:userId" component={UserPageContainer} onEnter={requestUser}/>
          <Route path="/videos/new" component={VideoUploadFormContainer}/>
          <Route path="/search" component={SearchContainer}/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
