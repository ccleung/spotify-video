import React from 'react';

export default class Track extends React.Component {
  render() {
    return (
      <div className="track" onClick={this.props.onClick}>
        {this.props.artist} - {this.props.name}
      </div>
    )
  }
}
