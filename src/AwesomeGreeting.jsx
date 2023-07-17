import React, { Component } from 'react';

export default class AwesomeGreegting extends Component {
	render() {
		return (
			<div>Hello, {this.props.userName} !!</div>
		)
	}
}