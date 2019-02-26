import React from 'react';
import ReactDOM from 'react-dom';
import {signup,login,logout} from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';
import {fetchBenches} from './actions/bench_actions'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById("root");
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  window.fetchBenches = fetchBenches;
  
  let store;
  if (window.currentUser) {
    store = configureStore(
    {
     session: 
     { id: window.currentUser.id},
     entities: {
       users: {
         [window.currentUser.id]: window.currentUser 
        }
      }
    });
  } else {
    store = configureStore();
  }
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={store} />, root);
})