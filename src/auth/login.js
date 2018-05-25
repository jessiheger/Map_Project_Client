import axios from 'axios';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { SERVER_URL } from '../constants';
import { Form, FormGroup, Col, Button, FormControl, ControlLabel } from 'react-bootstrap'

// import {Tabs, Tab} from 'material-ui/Tabs';

// MATERIAL UI
// import RaisedButton from 'material-ui/RaisedButton';
// import TextField from 'material-ui/TextField';

class Login extends Component {
	constructor(props){
		super(props);
		this.state = {
			// name: '',
			email: '',
			password: ''
			// value: 'login'
		};
	}

	handleEmailChange = (e) => {
		this.setState({ email: e.target.value });
	}
	handlePasswordChange = (e) => {
		this.setState({ password: e.target.value });
	}

	handleLoginSubmit = (e) => {
		e.preventDefault();
		console.log('form was submitted. this.state:', this.state);
		axios.post(SERVER_URL+'/auth/login', {
			email: this.state.email,
			password: this.state.password })
		.then(result => {
			console.log("SUCCESSFUL LOGIN! result.data is ", result.data)
			localStorage.setItem('mernToken', result.data.token);
			this.props.updateUser();
		})
		.catch(err => {
			console.log("LOGIN ERROR", err.response)
		});
	}

	render() {
		if(this.props.user) {
			return (<Redirect to="/profile" />);
		}
		return(
			<div>
			<Form horizontal onSubmit={this.handleLoginSubmit}>
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
				      	<Button type="submit" value='login' >Log in</Button>
				    </Col>
				</FormGroup>
			</Form>
			</div>





		);
	}
}

export default Login;