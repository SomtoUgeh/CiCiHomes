import React from 'react';
import Header from './Header';
import DetailsImage from './DetailsImage';
import Details from './Details';
import Footer from './Footer';
import image from '../../images/tim-easley-317615-unsplash-min.jpg';

const HomeDescription = () => {
  return (
    <>
      <Header />
      <DetailsImage image={image} title="cool-homes" />
      <Details />
      <Footer />
    </>
  );
};

export default HomeDescription;
