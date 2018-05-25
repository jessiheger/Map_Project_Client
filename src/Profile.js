import React, { Component } from 'react';
import TripList from './Components/triplist';

class Profile extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		if(this.props.user){
			console.log("this.props.trips from Profile page:", this.props.trips);
			return(
				<div className="profileDiv">
					<h2>Hi, {this.props.user.name}!</h2>
					{ this.props.trips.length > 0 ? 
						<TripList user={this.props.user} trips={this.props.trips} /> : 
						<p>You don't have any trips yet :( Go to New Trip to add a trip! </p>}
				</div>
			);
		}
		else {
			return(
				<div className="profileDiv">
					<p>PROFILE PAGE! You must be logged in to view this page.</p>
					<p>Would you like to <a href="/login">log in</a> or <a href="/signup">sign up</a>?</p>
				</div>
			)
		};
	}
}

export default Profile;