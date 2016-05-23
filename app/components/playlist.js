import React from 'react';
import Track from './track'
import styles from '../styles/playlist.css'

export default class Playlist extends React.Component {
  render() {
    var tracks = this.props.tracks;
    var trackNodes = tracks.map((track) => {
      var isSelected = this.isSelected(track, this.props.selectedTrackId)
      return (
        <Track key={track.id}
               artist={track.artists[0].name}
               name={track.name}
               isSelected={isSelected}
               onClick={() => this.props.onTrackClick(track.id, track.name + ' ' + track.artists[0].name)} />
      )
    });
    return (
      <div className={styles.container}>
        {trackNodes}
      </div>
    );
  }

  isSelected(track, selectedTrackId) {
    if (track && track.id && selectedTrackId) {
      return (track.id === selectedTrackId);
    }
    return false;
  }
}

Playlist.propTypes = { onTrackClick: React.PropTypes.func.isRequired }
Playlist.propTypes = { tracks: React.PropTypes.array.isRequired }
Playlist.propTypes = { selectedTrackId: React.PropTypes.string.isRequired }
