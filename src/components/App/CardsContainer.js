import React, { Component } from 'react';
import FullCard from './FullCard';

export class CardsContainer extends Component {
  render() {
    return (
      <div
        style={{
          height: '100%',
          overflow: 'auto',
          padding: '25px',
          marginTop: '310px'
        }}
      >
        <FullCard />
        <FullCard />
        <FullCard />
        <FullCard />
        <FullCard />
        <FullCard />
        <FullCard />
        <FullCard />
        <FullCard />
        <FullCard />
        <FullCard />
        <FullCard />
      </div>
    );
  }
}

export default CardsContainer;
