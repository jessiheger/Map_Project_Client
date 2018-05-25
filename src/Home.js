import React, { Component } from 'react';
import Worldview from './Components/worldview';
import { Jumbotron } from 'react-bootstrap';


class Home extends Component {
	render() {
		// if (this.props.user) { <--- THIS BREAKS AUTH
		return(
			<div className="container">
				{/* <Jumbotron /> */}
				<Worldview />
			</div>
		);
	}
// }
}

export default Home;