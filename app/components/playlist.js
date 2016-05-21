import React from 'react';
import Track from './track'
import styles from '../styles/playlist.css'

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
      <div className={styles.container}>
        {trackNodes}
      </div>
    );
  }
}

Playlist.propTypes = { onTrackClick: React.PropTypes.func.isRequired }
Playlist.propTypes = { tracks: React.PropTypes.array.isRequired }
