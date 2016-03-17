import React, { PropTypes } from 'react';
import SelectedYouTubePlayer from '../containers/selected-youtube-player'
import SelectablePlaylist from '../containers/selectable-playlist'

export default class App extends React.Component {
  componentDidMount() {
    const { onComponentDidMount } = this.props;
    onComponentDidMount();
  }

  render() {
    return (
      <div>
        <nav>
          <a href="#" onClick={() => this.props.onLogoutClicked()}>Logout</a>
        </nav>
        <SelectedYouTubePlayer />
        <SelectablePlaylist />
      </div>
    )
  }
}

App.propTypes = { dispatch: PropTypes.func.isRequired }
App.propTypes = { onLogoutClicked: React.PropTypes.func.isRequired }
