import React, {Component} from 'react';
import ReactMapboxGL from 'react-mapbox-gl';

const MapboxAccessToken = process.env.REACT_APP_MAPBOX_KEY;
const Map = ReactMapboxGL({ accessToken:MapboxAccessToken});

class Worldview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      centerLong: 41.168,
      centerLat: 17.941
      }
    }

  render() {
    return (
      <div>
        <Map
          style={'mapbox://styles/jessiheger/cjh5hv7g03y2y2rqmtd3i2j65'}
          containerStyle={{ height: "600px" }}
          center={[this.state.centerLong, this.state.centerLat]}
          zoom={[1]} />
      </div>
    );
  }
}

export default Worldview;