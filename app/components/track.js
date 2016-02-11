import React from 'react';

export default class Track extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: ''
		}
	}
	render() {
		return (
			<div className="track">
				{this.props.name}
			</div>
		)
	}
}