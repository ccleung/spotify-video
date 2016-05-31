import React, { PropTypes } from 'react';
import SelectedYouTubePlayer from '../containers/selected-youtube-player'
import SelectablePlaylist from '../containers/selectable-playlist'
import styles from '../styles/app.css'
import {Icon} from 'react-fa'

export default class App extends React.Component {
  componentDidMount() {
    const { onComponentDidMount } = this.props;
    onComponentDidMount();
  }

  render() {
    return (
      <div className={styles.app}>
        <nav className={styles.navContainer}>
          <a className={styles.button} href="#" onClick={() => this.props.onLogoutClicked()}>Logout</a>
          <div><Icon spin name="spinner" /></div>
          <Icon spin name="spinner" />
          <Icon spin name="spinner" />
        </nav>
        <div className={styles.appContentContainer}>
          <SelectedYouTubePlayer />
          <SelectablePlaylist />
        </div>
      </div>
    )
  }
}

App.propTypes = { dispatch: PropTypes.func.isRequired }
App.propTypes = { onLogoutClicked: React.PropTypes.func.isRequired }
