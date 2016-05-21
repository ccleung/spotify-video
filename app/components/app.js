import React, { PropTypes } from 'react';
import SelectedYouTubePlayer from '../containers/selected-youtube-player'
import SelectablePlaylist from '../containers/selectable-playlist'
import styles from '../styles/app.css'
import buttonStyles from '../styles/button.css'

export default class App extends React.Component {
  componentDidMount() {
    const { onComponentDidMount } = this.props;
    onComponentDidMount();
  }

  render() {
    return (
      <div className={styles.app}>
        <nav>
          <a className={buttonStyles.button} href="#" onClick={() => this.props.onLogoutClicked()}>Logout</a>
        </nav>
        <SelectedYouTubePlayer />
        <SelectablePlaylist />
      </div>
    )
  }
}

App.propTypes = { dispatch: PropTypes.func.isRequired }
App.propTypes = { onLogoutClicked: React.PropTypes.func.isRequired }
