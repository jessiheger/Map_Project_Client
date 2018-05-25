import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { SERVER_URL } from '../constants';
import { Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class DestinationForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
      		landmark: '',
      		city: '',
      		state: '',
      		country: '',
      		image: '',
      		trip: this.props.trip
      	};
	}
	onLandmarkChange = (event) => {
		this.setState({
			landmark: event.target.value,
		})
	}
	onCityChange = (event) => {
		this.setState({
			city: event.target.value,
		})
	}
	onStateChange = (event) => {
		this.setState({
			state: event.target.value,
		})
	}
	onCountryChange = (event) => {
		this.setState({
			country: event.target.value,
		})
	}
	onImageChange = (event) => {
		this.setState({
			image: event.target.value,
		})
	}
	onSubmit = (e) => {
		e.preventDefault();
		console.log('form was submitted', this.state);
		axios.post(SERVER_URL+'/destination', {newDestination: this.state, user: this.props.user, tripId: this.state.trip } ) 
		.then(result => {
			console.log("destination SUCCESS!", result)
			// this.props.updateTrip(this.state.trip);
			this.props.refetchData();
		})
		.catch(err => {
			console.log("ERROR", err)
		})
	}
	render(){
		return (
			<div className='DestinationForm'>
				<Form horizontal onSubmit={this.onSubmit}>
					<FormGroup controlId="formHorizontalLandmark">
						<Col componentClass={ControlLabel} sm={4}>Landmark</Col>
						<Col xs={6}>
							<FormControl
							autoFocus= {this.props.autoFocus}
							onChange={this.onLandmarkChange}
							placeholder="Taj Mahal"
							type="text"
							value={(this.state.landmark)} />
						</Col>
					</FormGroup>
					<FormGroup controlId="formHorizontalCity">
						<Col componentClass={ControlLabel} sm={4}>City</Col>
						<Col xs={6}>
							<FormControl
							autoFocus= {this.props.autoFocus}
							onChange={this.onCityChange}
							placeholder="Agra"
							type="text"
							value={(this.state.city)} />
						</Col>
					</FormGroup>
					<FormGroup controlId="formHorizontalState">
						<Col componentClass={ControlLabel} sm={4}>State</Col>
						<Col xs={6}>
							<FormControl
							autoFocus= {this.props.autoFocus}
							onChange={this.onStateChange}
							placeholder="Uttar Pradesh"
							type="text"
							value={(this.state.state)} />
						</Col>
					</FormGroup>
					<FormGroup controlId="formHorizontalCountry">
						<Col componentClass={ControlLabel} sm={4}>Country</Col>
						<Col xs={6}>
							<FormControl
							autoFocus= {this.props.autoFocus}
							onChange={this.onCountryChange}
							placeholder="India"
							type="text"
							value={(this.state.country)} />
						</Col>
					</FormGroup>
					<FormGroup>
					    <Col smOffset={2} sm={6}>
					      	<Button type="submit" >Save Destination</Button>
					    </Col>
					</FormGroup>
				</Form>	
			</div>
		)
	}
}

export default DestinationForm;