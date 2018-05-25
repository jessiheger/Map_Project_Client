import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { SERVER_URL } from '../constants';
import { Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';


class TripNameForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			destinations: [],
			trip: ''
		};
	}
	onNameChange = (event) => {
		this.setState({
			name: event.target.value,
		});
	}

	ComponentDidMount = () => {
		console.log('TripNameForm DID mount!')
	}

	onSubmit = (e) => {
		e.preventDefault();
		console.log('form was submitted', this.state);
		axios.post(SERVER_URL+'/trip', {newTrip: this.state, user: this.props.user} )
		.then(res => {
			console.log("trip name SUCCESS!", res.data);
			this.setState({
				trip: res.data
			}, () => {
				this.props.updateTrip(res.data);
			});
			
		})
		.catch(err => {
			console.log("ERROR", err)
		});
	}
	render(){
		return (
			<div className='TripNameForm'>
				<Form horizontal onSubmit={this.onSubmit}>
					<FormGroup controlId="formHorizontalTripName">
						<Col componentClass={ControlLabel} sm={4}>Name Your Trip</Col>
							<Col xs={6}>
								<FormControl onChange={this.onNameChange} placeholder="Best Trip Ever!" type="text" value={(this.state.name)} />
							</Col>
					</FormGroup>
					<FormGroup>
					    <Col smOffset={2} sm={6}>
					      	<Button type="submit" >Create Trip</Button>
					    </Col>
					</FormGroup>
				</Form>	
			</div>		
		)
	}
}

export default TripNameForm;