import React, { Component } from 'react';
import ViewTripHeader from './viewtripheader';
import TripMap from './tripmap';
import DestinationSection from './destinations';
import axios from 'axios';
import { SERVER_URL } from '../../constants';
import { Grid, Row, Col } from 'react-bootstrap';


class ViewTripContainer extends Component {
	constructor(props) {
		super(props);
		const {match} = this.props;
		console.log('params', match.params);
		this.state = {
			tripInfo: '',
			tripDestinations: ''
		}
	}

	componentDidMount = () => {
		axios.get(SERVER_URL+'/trip/' + this.props.match.params.tripId)
		.then(result => {
			console.log("success, component DID MOUNT. Here\'s the axios request result:", result.data.name);
			console.log('destinations found: ', result.data.destinations);
			this.setState({ tripDestinations: result.data.destinations, tripInfo: result.data.name});
		})
		.catch(err => {
			console.log('fail', err);
		})
	}

	render() {
		return(
			<div>
				<Grid>
					<Row className="show-grid">
						<Col xs={12}>
							<ViewTripHeader tripInfo={this.state.tripInfo} tripId={this.props.match.params.tripId}/>
						</Col>
					</Row>
					<Row className="show-grid">
		    			<Col md={6} mdPush={6}>
		      				<DestinationSection tripDestinations={this.state.tripDestinations} />
		    			</Col>
		   				 <Col md={6} mdPull={6}>
		      				<TripMap />
		    			</Col>
		  			</Row>
		  		</Grid>
  			</div>
		)
	}
}




export default ViewTripContainer;