import React, { Component } from 'react';
import Card1 from './Card1';
import image2 from '../../images/dark-min.jpg';
import image1 from '../../images/tim-easley-317615-unsplash-min.jpg';
import image3 from '../../images/mateusz-majewski-659603-unsplash-min.jpg';
import image4 from '../../images/riccardo-oliva-231657-unsplash-min.jpg';

export class Featured extends Component {
  render() {
    return (
      <div className="featured wrapper">
        <div className="featured-heading">
          <h2 className="featured-title">Featured Cici {this.props.destination}</h2>
          <p className="featured-tagline">
            Browse through our catalog of beautiful homes around Lagos
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
            title={'Ikotun'}
            description={
              'Enjoy our wonderful homes from the Ikeja, from a wonderful walk by to the grand mall!'
            }
          />
          <Card1
            image={image3}
            title={'Agege'}
            description={
              'Enjoy our wonderful homes from the Ikeja, from a wonderful walk by to the grand mall!'
            }
          />
          <Card1
            image={image4}
            title={'Ikoyi'}
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
