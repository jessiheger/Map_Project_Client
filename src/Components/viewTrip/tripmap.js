import React, {Component} from 'react';
import ReactMapboxGL from 'react-mapbox-gl';
import axios from 'axios';
import { SERVER_URL } from '../../constants';

const MapboxAccessToken = process.env.REACT_APP_MAPBOX_KEY;
const MyKey = process.env.REACT_APP_MY_KEY;
const SmallMap = ReactMapboxGL({ accessToken:MapboxAccessToken });

class TripMap extends Component {
  constructor(props) {
  super(props);
    this.state = {
      addedDest: '',
      lat: null,
      lng: null,
      tripDestinations: this.props.tripDestinations
      }
    }

  componentWillReceiveProps = () => {
    console.log(this)
    if (this.props.tripDestinations.length > 0) {
      let landmarkNoSpaces = this.props.tripDestinations[0].landmark.replace(' ','+');
      console.log(landmarkNoSpaces);
      let cityNoSpaces = this.props.tripDestinations[0].city.replace(' ','+');
      console.log(cityNoSpaces);
      // // let countryNoSpaces = this.props.tripDestinations[0].country.replace(' ','+');
      // let fullDestInfo = cityNoSpaces+'+'+state;
      // console.log('fullDestInfo', fullDestInfo);
      let mapURL = ''
      if (this.props.tripDestinations[0].landmark) {
        mapURL = axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${landmarkNoSpaces}+${cityNoSpaces}&key=${MyKey}`)
      } 
      else {
        mapURL = axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${cityNoSpaces}&key=${MyKey}`)
      }
      (mapURL).then(res => {
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