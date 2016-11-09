import React from 'react';
import { Provider } from 'react-redux';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app/app_container';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import SongIndexContainer from './songs/song_index_container';

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/home');
    }
  }

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={GreetingContainer}>
          <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
        </Route>
        <Route path="/home" component={App} onEnter={_ensureLoggedIn}>
          <Route path="/home/songs" component={SongIndexContainer}/>
        </Route>
      </Router>
    </Provider>
  );
};
// <Route path="/home/users" component={UsersIndexContainer} />
// <Route path="/home/playlists" component={PlaylistIndexContainer} />

export default Root;
