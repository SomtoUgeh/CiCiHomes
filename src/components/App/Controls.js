import React, { Component } from 'react';

export class Controls extends Component {
  state = {};

  handleSearch = e => {
    this.setState({ ...this.state, search: e.target.value }, () => {
      this.props.filterSearch(this.state.search);
    });
  };

  handleLocation = e => {
    this.setState({ address: e.target.value }, () => {
      this.props.filterAddress(this.state.address);
    });
  };

  handlePrice = e => {
    this.setState({ price: e.target.value }, () => {
      this.props.filterPrice(this.state.address);
    });
  };

  handleBedroom = e => {
    this.setState({ bedroom: e.target.value }, () => {
      this.props.filterBedroom(this.state.address);
    });
  };

  handleServices = e => {
    this.setState({ service: e.target.value }, () => {
      this.props.filterServices(this.state.service);
    });
  };

  handleAvailability = e => {
    this.setState({ availability: e.target.value }, () => {
      this.props.filterAvailability(this.state.availability);
    });
  };

  render() {
    return (
      <div className="controls">
        <div className="wrapper filters">
          <div className="filter">
            <input
              type="text"
              className="filter-search"
              name="search"
              placeholder="Search Villa in Ikeja..."
              onChange={this.handleSearch}
            />
          </div>
          <div className="price filter select">
            <select className="dropdown" value={this.state.address} onChange={this.handleLocation}>
              <option value="Location">Location</option>
              <option value="Ikeja">Ikeja</option>
              <option value="Lekki">Lekki</option>
              <option value="Ikoyi">Ikoyi</option>
              <option value="Alausa">Alausa</option>
              <option value="Festac">Festac</option>
              <option value="Yaba">Yaba</option>
              <option value="Gbagada">Gbagada</option>
              <option value="Magodo">Magodo</option>
              <option value="Berger">Berger</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <div className="price filter select">
            <select value={this.state.price} onChange={this.handlePrice}>
              <option value="Price">Price</option>
              <option value="700,000"> > 700,000</option>
              <option value="400,000"> > 400,000</option>
              <option value="300,000"> > 300,000</option>
              <option value="200,000"> > 200,000</option>
            </select>
          </div>

          <div className="price filter select">
            <select value={this.state.bedroom} onChange={this.handleBedroom}>
              <option value="Bedroom">Bedroom</option>
              <option value="1">1 </option>
              <option value="2">2 </option>
              <option value="3">3 </option>
              <option value="4">4 </option>
              <option value="5">5 </option>
            </select>
          </div>

          <div className="price filter select">
            <select value={this.state.availability} onChange={this.handleAvailability}>
              <option value="Availability">Availability</option>
              <option value="One week">One week</option>
              <option value="Two weeks">Two weeks</option>
              <option value="One month">One month</option>
            </select>
          </div>

          <div className="price filter select">
            <select value={this.state.service} onChange={this.handleServices}>
              <option value="Services">Services</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Likely">Likely</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default Controls;
