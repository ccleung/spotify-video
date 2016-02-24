import React from 'react';

export default class YouTubePlayer extends React.Component {
  render() {
    var srcUrl = "https://www.youtube.com/embed/" + this.props.playTrack;
    return (
      <div>
        <iframe width="560" 
            height="315"
            src={srcUrl}
            frameborder="0" 
            allowfullscreen>
        </iframe>
        <p>
          Current Video Id {this.props.playTrack}
        </p>
      </div>
    )
  }
}

YouTubePlayer.propTypes = { playTrack: React.PropTypes.string.isRequired }
