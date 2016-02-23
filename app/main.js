import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import spotifyVideoReducers from './reducers'
import App from './components/app';
import { getYouTubeVideoID } from './utils/web-api'

main();

function main() {
	var promise = getYouTubeVideoID("hello world");
	promise.then((data) => {
		console.log(data);
	});

  let store = createStore(spotifyVideoReducers, window.devToolsExtension ? window.devToolsExtension() : f => f)
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  );
}
