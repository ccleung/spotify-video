import React from 'react';
import ResponseData from '../data/response-data'
import Track from './track'

export default class Playlist extends React.Component {
	constructor(props) {
    super(props);
    this.state = {data: ResponseData};
    console.log(ResponseData);
  }
  render() {
  	var items = this.state.data.items;
		var trackNodes = items.map(function(item) {
			var track = item.track;
			return (
				<Track name={track.name} key={track.id} />
			)
		});
		return (
      <div className="playlist">
        {trackNodes}
      </div>
    );
	}
}
