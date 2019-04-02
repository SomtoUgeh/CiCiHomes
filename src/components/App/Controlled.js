import React, { Component } from 'react';
import CardsContainer from './CardsContainer';
import Maps from './Maps';

export class Controlled extends Component {
  state = {};

  componentDidMount() {
    const houses = JSON.parse(localStorage.getItem('houseData'));
    this.setState({ houses, filterType: this.props.filterType, value: this.props.value });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.filterType !== prevProps.filterType) {
      this.setState({ filterType: this.props.filterType });
    }

    if (this.props.value !== prevProps.value) {
      this.setState({ value: this.props.value });
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="controlled">
          <CardsContainer
            houses={this.state.houses}
            filterType={this.state.filterType}
            value={this.state.value}
          />
          <div className="map-container">
            <Maps />
          </div>
        </div>
      </div>
    );
  }
}

export default Controlled;
