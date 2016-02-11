import React from 'react';
import ReactDOM from 'react-dom';
import Playlist from './components/playlist';

main();

function main() {
    ReactDOM.render(<Playlist />, document.getElementById('app'));
}
