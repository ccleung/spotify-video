import React from 'react';
import styles from '../styles/track.css'

export default class Track extends React.Component {
  render() {
    var trackClasses = styles.track;
    if (this.props.isSelected) {
      trackClasses += ' ' + styles.selected;
    }
    return (
      <div className={trackClasses} onClick={this.props.onClick}>
        {this.props.artist} - {this.props.name}
      </div>
    )
  }
}
