import React from 'react';
import styles from '../styles/track.css'

export default class Track extends React.Component {
  render() {
    return (
      <div className={styles.track} onClick={this.props.onClick}>
        {this.props.artist} - {this.props.name}
      </div>
    )
  }
}
