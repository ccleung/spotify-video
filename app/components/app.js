import React, { PropTypes } from 'react';
import SelectedYouTubePlayer from '../containers/selected-youtube-player'
import SelectablePlaylist from '../containers/selectable-playlist'
import { fetchPlaylist } from '../actions'

export default class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPlaylist())
  }

  render() {
    return (
      <div>
        <SelectedYouTubePlayer />
        <SelectablePlaylist />
      </div>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
}
