import React, { Component } from 'react';
import {
  GoogleMapLoader,
  GoogleMap,
  Maker,
  DirectionsRenderer,
  withGoogleMap
} from 'react-google-maps'
import SearchBox from "react-google-maps/lib/places/SearchBox"
import { INPUT_STYLE } from './Constants.js'

import Results from './Results'

class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      origin: new google.maps.LatLng(4.6786374,-74.0576714),
      destination: new google.maps.LatLng(4.6650895,-74.0604563),
      directions: null,
      bounds: null,
      center: props.center,
      markers: []
    }
  }

  handleMapMounted(map) {
    this._map = map;
  }

  handleBoundsChanged() {
    this.setState({
      bounds: this._map.getBounds(),
      center: this._map.getCenter(),
    });
  }

  handleSearchBoxOriginMounted(searchBox) {
    this._searchBoxOrigin = searchBox;
  }

  handleSearchBoxDestinationMounted(searchBox) {
    this._searchBoxDestination = searchBox;
  }

  handleOriginChanged() {
     const places = this._searchBoxOrigin.getPlaces();
     this.origin = places[0].geometry.location;
  }

  handleDestinationChanged() {
    const places = this._searchBoxDestination.getPlaces();
    this.setState({
      origin: this.origin,
      destination: places[0].geometry.location
    });

    this.calculateRoute();
  }

  calculateRoute() {
    const DirectionsService = new google.maps.DirectionsService();

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
        defaultZoom={16}
        defaultCenter={props.center}
        >
          {props.directions && <DirectionsRenderer directions={props.directions} />}

          <SearchBox
            ref={props.onSearchBoxOriginMounted}
            bounds={props.bounds}
            controlPosition={google.maps.ControlPosition.TOP_LEFT}
            onPlacesChanged={props.onOriginChanged}
            inputPlaceholder="Ingresa el Origen"
            inputStyle={INPUT_STYLE}
          />

          <SearchBox
            ref={props.onSearchBoxDestinationMounted}
            bounds={props.bounds}
            controlPosition={google.maps.ControlPosition.TOP_LEFT}
            onPlacesChanged={props.onDestinationChanged}
            inputPlaceholder="Ingresa el Destino"
            inputStyle={INPUT_STYLE}
          />

          {props.directions && <Results directions={props.directions} />}

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
          directions={this.state.directions}
          center={this.state.center}
          bounds={this.state.bounds}
          markers={this.state.markers}
          onMapMounted={this.handleMapMounted.bind(this)}
          onBoundsChanged={this.handleBoundsChanged.bind(this)}
          onSearchBoxOriginMounted={this.handleSearchBoxOriginMounted.bind(this)}
          onSearchBoxDestinationMounted={this.handleSearchBoxDestinationMounted.bind(this)}
          onOriginChanged={this.handleOriginChanged.bind(this)}
          onDestinationChanged={this.handleDestinationChanged.bind(this)}
        />

      );
    }
  }

  export default Map
