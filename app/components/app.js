import React from 'react';
import YoutubePlayer from './youtube-player'
import Playlist from './playlist'

export default class App extends React.Component {
		constructor(props) {
		super(props);
		this.state = {
		}
	}
	render() {
		return (
			<div>
				<YoutubePlayer />
				<Playlist />
			</div>
		)
	}
}
