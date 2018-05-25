import React, {Component} from 'react';
import ReactMapboxGL from 'react-mapbox-gl';

const MapboxAccessToken = process.env.REACT_APP_MAPBOX_KEY;
const SmallMap = ReactMapboxGL({ accessToken:MapboxAccessToken});

class TripMap extends Component {
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
        <SmallMap
        style={'mapbox://styles/jessiheger/cjh5hv7g03y2y2rqmtd3i2j65'}
          containerStyle={{ height: "600px", width: "500px" }}
          center={[this.state.centerLong, this.state.centerLat]}
          zoom={[1]} />
      </div>
    );
  }
}

export default TripMap;