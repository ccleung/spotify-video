import React from 'react';
import SelectedYouTubePlayer from '../containers/selected-youtube-player'
import SelectablePlaylist from '../containers/selectable-playlist'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <SelectedYouTubePlayer />
        <SelectablePlaylist />
      </div>
    )
  }
}
