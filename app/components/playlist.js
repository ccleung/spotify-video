import React from 'react';
import Track from './track'

export default class Playlist extends React.Component {
  render() {
    var items = this.props.data.items;
    var trackNodes = items.map((item) => {
      var track = item.track;
      return (
        <Track key={track.id}
               artist={track.artists[0].name}
               name={track.name}
               onClick={() => this.props.onTrackClick(Math.floor((Math.random() * 2) + 1) % 2 == 0 ? 'Zaek8Va_hFA' : 'hLQl3WQQoQ0')} />
      )
    });
    return (
      <div className="playlist">
        {trackNodes}
      </div>
    );
  }
}

Playlist.propTypes = { data: React.PropTypes.object.isRequired }
Playlist.propTypes = { onTrackClick: React.PropTypes.func.isRequired }
