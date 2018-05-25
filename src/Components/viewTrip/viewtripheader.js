import React, { Component } from 'react';
import axios from 'axios';


class ViewTripHeader extends Component {
	constructor(props) {
		super(props)
		console.log("this.props.tripInfo", this.props.tripInfo);
		// console.log("this.props.tripId:", this.props.tripId)
	}

	render() {
		return(
			<div>
				<h1>{this.props.tripInfo}</h1>
			</div>
		);
	}
}

export default ViewTripHeader;