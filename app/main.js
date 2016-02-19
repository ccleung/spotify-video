import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import spotifyVideoReducers from './reducers'
import App from './components/app';

main();

function main() {
  let store = createStore(spotifyVideoReducers)
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  );
}
