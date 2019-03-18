import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const API_KEY = 'AIzaSyB6pMCf-Nx39kFRBWdqD2Xdk10sCgrjA44';

export class Maps extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    lat: -1.2884,
    lng: 36.8233
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.lat !== prevProps.lat) {
      this.setState({ lat: this.props.lat });
    }

    if (this.props.lng !== prevProps.lng) {
      this.setState({ lng: this.props.lng });
    }
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    const { lat, lng } = this.state;
    const mapStyles = {
      position: 'fixed !important',
      width: '47%',
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
          lat,
          lng
        }}
      >
        <Marker onClick={this.onMarkerClick} name={'Kenyatta International Convention Centre'} />

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: API_KEY
})(Maps);
