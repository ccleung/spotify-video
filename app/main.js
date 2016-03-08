import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import { Provider } from 'react-redux';
import configureStore from './store/configure-store';
import App from './components/app';
import Login from './components/login';
import { getYouTubeVideoID } from './utils/web-api';

main();

function main() {
  const store = configureStore();
  ReactDOM.render(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="/login" component={Login}/>
      </Router>
    </Provider>,
    document.getElementById('app')
  );
}
