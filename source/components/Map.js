import React, { Component } from 'react';
import {
  GoogleMapLoader,
  GoogleMap,
  Maker,
  DirectionsRenderer,
  withGoogleMap
} from 'react-google-maps'



  class Map extends Component {

    constructor(props) {
      super(props);
      console.log('constructor');
      this.state = {
        origin: new google.maps.LatLng(41.8507300, -87.6512600),
        destination: new google.maps.LatLng(41.8525800, -87.6514100),
        directions: null,
      }
    }

    componentDidMount() {
      const DirectionsService = new google.maps.DirectionsService();

      console.log(this.state.origin.lat());

      DirectionsService.route({
        origin: this.state.origin,
        destination: this.state.destination,
        travelMode: google.maps.TravelMode.DRIVING,
      }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      });
    }

    render() {

      const DirectionsExampleGoogleMap = withGoogleMap(props => (
        <GoogleMap
          defaultZoom={12}
          defaultCenter={props.center}
          >
            {props.directions && <DirectionsRenderer directions={props.directions} />}
          </GoogleMap>
        ));

      return (
        <DirectionsExampleGoogleMap
          containerElement={
            <div style={{ height: `100%` }} />
          }
          mapElement={
            <div style={{ height: `100%` }} />
          }
          center={this.state.origin}
          directions={this.state.directions}
        />
      );
    }
  }

  export default Map
