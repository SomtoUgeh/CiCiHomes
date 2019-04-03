import React from 'react';
import Header from './Header';
import DetailsImage from './DetailsImage';
import Details from './Details';
import Footer from './Footer';
import image from '../../images/tim-easley-317615-unsplash-min.jpg';

const HomeDescription = props => {
  return (
    <>
      <Header />
      <div className="details-container">
        <Details id={props.match.params.id} />
        <DetailsImage image={image} title="cool-homes" />
      </div>
      <Footer />
    </>
  );
};

export default HomeDescription;
