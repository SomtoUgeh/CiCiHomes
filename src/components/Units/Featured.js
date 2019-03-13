import React, { Component } from 'react';
import Cards from './Cards';
import { Card } from 'semantic-ui-react';
import image1 from '../../images/tim-easley-317615-unsplash-min.jpg';
import Card1 from './Card1';
import image2 from '../../images/dark-min.jpg';

export class Featured extends Component {
  render() {
    return (
      <div className="featured wrapper">
        <div className="featured-heading">
          <h2 className="featured-title">Featured Intel Locations</h2>
          <p className="featured-tagline">
            Browse through our catalog of beautiful homes in the comfort of your home
          </p>
        </div>
        <div className="images-holder">
          <Card1
            image={image1}
            title={'Ikeja'}
            description={
              'Enjoy our wonderful homes from the Ikeja, from a wonderful walk by to the grand mall!'
            }
          />
          <Card1
            image={image2}
            title={'Ikeja'}
            description={
              'Enjoy our wonderful homes from the Ikeja, from a wonderful walk by to the grand mall!'
            }
          />
          <Card1
            image={image2}
            title={'Ikeja'}
            description={
              'Enjoy our wonderful homes from the Ikeja, from a wonderful walk by to the grand mall!'
            }
          />
          <Card1
            image={image1}
            title={'Ikeja'}
            description={
              'Enjoy our wonderful homes from the Ikeja, from a wonderful walk by to the grand mall!'
            }
          />
        </div>
      </div>
    );
  }
}

export default Featured;
