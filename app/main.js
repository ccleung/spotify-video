import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux';
import configureStore from './store/configure-store';
import AppContainer from './containers/app-container';
import Login from './components/login';
import { getYouTubeVideoID } from './utils/web-api';

main();

function main() {
  const store = configureStore();
  ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={AppContainer}/>
        <Route path="/login" component={Login}/>
      </Router>
    </Provider>,
    document.getElementById('app')
  );
}
