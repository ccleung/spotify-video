import React from 'react';

export default class Login extends React.Component {
  render() {
    return (
      <div className="login" onClick={this.props.onClick}>
        Get Started
      </div>
    )
  }
}
