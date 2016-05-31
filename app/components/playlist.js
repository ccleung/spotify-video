import React from 'react';
import Track from './track';
import styles from '../styles/playlist.css';
import {Icon} from 'react-fa';

export default class Playlist extends React.Component {
  render() {
    var normalizedTracks = this.props.tracks;
    // translated to deal with normalized state values
    // see playTrack reducer for more detail
    var trackNodes = normalizedTracks.result.tracks.map((trackId) => {
      var track = normalizedTracks.entities.tracks[trackId];
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
      <div className={styles.container} onScroll={(e) => this.props.onPlaylistScroll(e, React.findDOMNode(this)) }>
        {trackNodes}
        <div className={styles.spinnerContainer}>
          <Icon spin name="spinner" size="3x" />
        </div>
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
