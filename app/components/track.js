import React from 'react';
import styles from '../styles/track.css';
import classNames from 'classnames/bind';

export default class Track extends React.Component {
  render() {
    var cx = classNames.bind(styles);

    var trackClasses = cx({
       track: true,
       selected: this.props.isSelected
    })
    return (
      <div className={trackClasses} onClick={this.props.onClick}>
        {this.props.artist} - {this.props.name}
      </div>
    )
  }
}
