import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';


class Nav extends Component {
	handleLogout = (e) => {
		console.log('Logging out...');
		e.preventDefault();
		localStorage.removeItem('mernToken'); 
		this.props.updateUser();
	}
	render() {
		let links = '';
		if(this.props.user){
			links = (
				<span>
					<Link to="/profile">Profile</Link>
					<Link to="/newtrip">New Trip</Link>
					<a onClick={this.handleLogout}>Logout</a>
				</span>
				);
		} 
		else {
			links = (
			<span>
					<Link to="/login">Log In</Link>
					<Link to="/signup">Sign Up</Link>

			</span>
			);
		}
		return(
			<div>
				<Navbar>
						<Link to="/">Home</Link>
					{links}
        		</Navbar>
			</div>
		);
	}
}

export default Nav;