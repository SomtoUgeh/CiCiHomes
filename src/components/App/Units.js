import React, { Component } from 'react';
import Hero from './Hero';
import Header from './Header';
import Featured from './Featured';
import FullImage from './FullImage';
import Description from './Description';
import Trending from './Trending';
import Footer from './Footer';

export class Units extends Component {
  render() {
    return (
      <>
        <Header />
        <Hero />
        <Description />
        <Featured destination={'Locations'} />
        <Featured destination={'Destinations'} />
        <FullImage />
        <Trending />
        <Footer />
      </>
    );
  }
}

export default Units;
