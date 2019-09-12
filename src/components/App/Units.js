import React from 'react';
import Hero from './Hero';
import Header from './Header';
import Featured from './Featured';
import FullImage from './FullImage';
import Description from './Description';
import Footer from './Footer';
import Events from './Events';

export default function Units() {
  return (
    <>
      <Header />
      <Hero />
      <Description />
      <Featured />
      <Events />
      <FullImage />
      <Footer />
    </>
  );
}
