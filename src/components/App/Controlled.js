import React, { Component } from 'react';
import CardsContainer from './CardsContainer';
import Maps from './Maps';

export class Controlled extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="controlled">
          <CardsContainer />
          <Maps />
        </div>
      </div>
    );
  }
}

export default Controlled;
