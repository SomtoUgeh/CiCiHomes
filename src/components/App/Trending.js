import React, { Component } from 'react';
import LongerCard from './LongerCards';
import image2 from '../../images/dark-min.jpg';
import image1 from '../../images/tim-easley-317615-unsplash-min.jpg';
import image3 from '../../images/mateusz-majewski-659603-unsplash-min.jpg';
import image4 from '../../images/riccardo-oliva-231657-unsplash-min.jpg';
import image5 from '../../images/buildings-downtown-manhattan-nyc_925x-min.jpg';

export class Trending extends Component {
  render() {
    return (
      <div className="featured wrapper">
        <div className="featured-heading">
          <h2 className="featured-title">Trending Spots</h2>
        </div>
        <div className="images-holder trending">
          <LongerCard image={image1} title={'Houses'} description={'View 200,000 Houses'} />
          <LongerCard image={image2} title={'Apartment'} description={'View 10,000 Apartments'} />
          <LongerCard image={image3} title={'Bungalow'} description={'View 15,000 Bungalow'} />
          <LongerCard image={image4} title={'Cabin'} description={'Checkout our limited Cabins'} />
          <LongerCard image={image5} title={'Cabin'} description={'Checkout our limited Cabins'} />
        </div>
      </div>
    );
  }
}

export default Trending;
