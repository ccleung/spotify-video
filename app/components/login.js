import React from 'react';
import styles from '../styles/login.css';

export default class Login extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <p className={styles.title}>Welcome to Spotify Video</p>
        <a className={styles.button} href="/users/login">Get Started</a>
      </div>
    )
  }
}
