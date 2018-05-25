import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import {SERVER_URL } from '../constants';
import { Form, FormGroup, Col, Button, FormControl, ControlLabel } from 'react-bootstrap'


class Signup extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: '',
			email: '',
			password: ''
		};
	}

	handleNameChange =(e) => {
		this.setState({ name: e.target.value });
	}

	handleEmailChange =(e) => {
		this.setState({ email: e.target.value });
	}
	handlePasswordChange =(e) => {
		this.setState({ password: e.target.value });
	}

	handleSubmit = (e) => {
		e.preventDefault();
		console.log('form was submitted', this.state);
		axios.post(SERVER_URL+'/auth/signup', this.state)
		.then(result => {
			console.log("SUCCESS!", result.data)
			localStorage.setItem('mernToken', result.data.token);
			this.props.updateUser();
			// ^ we want to send props to the signup route
		})
		.catch(err => {
			console.log("ERROR", err)
		})
	}

	render() {
		if(this.props.user) 
			return (<Redirect to="/profile" />); 
		return(
			<div>
				<h2>Signup As a New User!</h2>
			<Form horizontal onSubmit={this.handleSubmit}>
				<FormGroup controlId="formHorizontalName">
				    <Col componentClass={ControlLabel} sm={2}>Name</Col>
					    <Col sm={10}>
					    	<FormControl type="text" placeholder="Name" name='Name' value={this.state.name} onChange={this.handleNameChange}/>
					    </Col>
				</FormGroup>
				<FormGroup controlId="formHorizontalEmail">
				    <Col componentClass={ControlLabel} sm={2}>Email</Col>
					    <Col sm={10}>
					    	<FormControl type="email" placeholder="Email" name='Email' value={this.state.email} onChange={this.handleEmailChange}/>
					    </Col>
				</FormGroup>
				<FormGroup controlId="formHorizontalPassword">
				    <Col componentClass={ControlLabel} sm={2}>
				      Password
				    </Col>
				    <Col sm={10}>
				      	<FormControl type="password" placeholder="Password" name='Password' value={this.state.password} onChange={this.handlePasswordChange}/>
				    </Col>
				</FormGroup>
				<FormGroup>
				    <Col smOffset={2} sm={10}>
				      	<Button className="button" type="submit" value='Sign Me Up!' >Sign Up</Button>
				    </Col>
				</FormGroup>
			</Form>
			</div>
		);
	}
}

export default Signup;