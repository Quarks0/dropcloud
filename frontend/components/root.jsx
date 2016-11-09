import React from 'react';
import { Provider } from 'react-redux';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app/app_container';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import SongIndexContainer from './songs/song_index_container';
import SongDetailContainer from './songs/song_detail_container';
import {requestAllSongs, requestSong} from '../actions/song_actions'

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
  };

  const _requestAllSongs = () => {
    store.dispatch(requestAllSongs());
  };

  const _requestSong = (nextState) => {
    console.log(nextState);
    store.dispatch(requestSong(nextState.params.songId));
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={GreetingContainer}>
          <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
        </Route>
        <Route path="/home" component={App} onEnter={_ensureLoggedIn}>
          <IndexRoute component={SongIndexContainer} onEnter={_requestAllSongs}/>
          <Route path="songs/:songId" component={SongDetailContainer} onEnter={_requestSong} />
        </Route>
      </Router>
    </Provider>
  );
};
// <Route path="/home/users" component={UsersIndexContainer} />
// <Route path="/home/playlists" component={PlaylistIndexContainer} />

export default Root;
