import React, { Component } from 'react';
import Hero from './Hero';
import Header from './Header';
import Featured from './Featured';
import FullImage from './FullImage';
import Description from './Description';
import Trending from './Trending';
import Footer from './Footer';
import { houseData } from './db/data';

export class Units extends Component {
  componentDidMount() {
    localStorage.setItem('houseData', JSON.stringify(houseData));
  }

  render() {
    return (
      <>
        <Header />
        <Hero />
        <Description />
        <Featured destination="Locations" />
        <Featured destination="Destinations" />
        <FullImage />
        <Trending />
        <Footer />
      </>
    );
  }
}

export default Units;
