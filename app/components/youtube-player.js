import React from 'react';

export default class YouTubePlayer extends React.Component {
  render() {
    var srcUrl = "https://www.youtube.com/embed/" + this.props.playTrack;
    return (
      <div>
        <iframe width="640" height="360" src={srcUrl} frameBorder="0" allowFullScreen />
        <p>
          Current Video Id {this.props.playTrack}
        </p>
      </div>
    )
  }
}

YouTubePlayer.propTypes = { playTrack: React.PropTypes.string.isRequired }
