import React from 'react';

export default class YouTubePlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoId: 'Zaek8Va_hFA'
    }
  }
  handleClick(event) {
    var vId = this.state.videoId == 'Zaek8Va_hFA' ? 'hLQl3WQQoQ0' : 'Zaek8Va_hFA';
    this.setState({videoId: vId});
  }
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
      <p onClick={this.handleClick.bind(this)}>
        Current Video Id {this.state.videoId}
      </p>
      </div>
    )
  }
}

YouTubePlayer.propTypes = { playTrack: React.PropTypes.string.isRequired }
