import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const API_KEY = 'AIzaSyB6pMCf-Nx39kFRBWdqD2Xdk10sCgrjA44';

export class Maps extends Component {
  render() {
    const mapStyles = {
      position: 'fixed !important',
      width: '50%',
      height: '66vh',
      top: '320px',
      right: '0'
    };

    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: -1.2884,
          lng: 36.8233
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: API_KEY
})(Maps);
