import React from 'react';
import Track from './track'

export default class Playlist extends React.Component {
  render() {
    var tracks = this.props.tracks;
    var trackNodes = tracks.map((track) => {
      return (
        <Track key={track.id}
               artist={track.artists[0].name}
               name={track.name}
               onClick={() => this.props.onTrackClick(track.id, track.name + ' ' + track.artists[0].name)} />
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
