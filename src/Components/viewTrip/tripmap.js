import React, {Component} from 'react';
import ReactMapboxGL from 'react-mapbox-gl';
import axios from 'axios';
import { SERVER_URL } from '../../constants';

const MapboxAccessToken = process.env.REACT_APP_MAPBOX_KEY;
const GoogleKey = process.env.REACT_APP_GOOGLE_KEY;
const SmallMap = ReactMapboxGL({ accessToken:MapboxAccessToken});

class TripMap extends Component {
  constructor(props) {
  super(props);
    this.state = {
      addedDest: '',
      lat: null,
      lng: null
      }
    }

  componentDidMount () {
    let destArr = this.props.tripDestinations || [];
    let firstObj = destArr[0]
    console.log('firstObj is', firstObj)
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=big+ben+london+great+britain&key=${GoogleKey}`)
      .then(res => {
        console.log('Connected to Google Geocoder');
        this.setState({ 
          lng: res.data.results[0].geometry.location.lng, 
          lat: res.data.results[0].geometry.location.lat 
        }), () => {
          axios.put(SERVER_URL + `/${this.props.tripDestinations}`, this.state)
          .then(res => {
            console.log('PUT request worked')
          .catch(err => {
              console.log('PUT request failed:', err);
            })
          })
        }
        console.log('coordinates are:', this.state.lng, this.state.lat)
      })      
  }
  render() {
    return (
      <div>
        <SmallMap
        style={'mapbox://styles/jessiheger/cjh5hv7g03y2y2rqmtd3i2j65'}
          containerStyle={{ height: "600px", width: "500px" }}
          center={ [this.state.lng, this.state.lat] }
          zoom={[10] }
          speed={[1]}
          curve={[.2]} />
      </div>
    )
  }
}



export default TripMap;