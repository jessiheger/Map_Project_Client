import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class TripList extends Component {
	constructor(props) {
		super(props);
		// this.state = {
		// 	tripId: null
		// };
		// this.handleClick = this.handleClick.bind(this);
	}

	// handleClick(e) {
	// 	this.setState({
	// 		tripId: e.target.id
	// 	})
	// }

	render() {
		let properArray = Array.from(this.props.trips)
	console.log('user is', this.props.user)
		let mappedTrips = properArray.map( (trip, idx) => {
			let link = "/trip/" + trip._id + "/" + this.props.user.id;
			return <li key={idx}><Link to={link}>{trip.name} </Link></li>
		})

		return (
			<div> 
				<p>Here are all the trips you've logged so far:</p>
				<ul>
				{mappedTrips}
				</ul>
			</div>

		)
	}
}

export default TripList