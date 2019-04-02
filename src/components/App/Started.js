import React, { Component } from 'react';
import Header from './Header';
import BrowseHeader from './BrowseHeader';
import Controlled from './Controlled';
import Controls from './Controls';

export class Started extends Component {
  state = {};

  handleSearch = search => {
    this.setState({ ...this.state, type: 'search', value: search });
  };

  handleLocation = location => {
    this.setState({ ...this.state, type: 'address', value: location });
  };

  handlePrice = price => {
    this.setState({ ...this.state, type: 'price', value: price });
  };

  handleBedroom = bedroom => {
    this.setState({ ...this.state, type: 'bedroom', value: bedroom });
  };

  handleServices = service => {
    this.setState({ ...this.state, type: 'service', value: service });
  };

  handleAvailability = availability => {
    this.setState({ ...this.state, type: 'availability', value: availability });
  };

  render() {
    return (
      <>
        <Header />
        <BrowseHeader text="Browse through our homes" />
        <Controls
          filterSearch={this.handleSearch}
          filterAddress={this.handleLocation}
          filterPrice={this.handlePrice}
          filterBedroom={this.handleBedroom}
          filterServices={this.handleServices}
          filterAvailability={this.handleAvailability}
        />
        <Controlled filterType={this.state.type} value={this.state.value} />
      </>
    );
  }
}

export default Started;
