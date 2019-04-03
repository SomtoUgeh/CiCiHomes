import React, { Component } from 'react';
import BackgroundSlider from 'react-background-slider';
import LabelledButton from '../Elements/LabelledButton';
import { withRouter } from 'react-router-dom';
import image1 from '../../images/buildings-downtown-manhattan-nyc_925x-min.jpg';
import image2 from '../../images/dark-min.jpg';
import image3 from '../../images/dirk-sebregts-110695-unsplash-min.jpg';
import image4 from '../../images/jace-afsoon-267410-unsplash-min.jpg';
import image5 from '../../images/mateusz-majewski-659603-unsplash-min.jpg';
import image6 from '../../images/patrick-robert-doyle-1322314-unsplash-min.jpg';

export class Landing extends Component {
  handleClick = () => {
    this.props.history.push('/units');
  };

  render() {
    return (
      <>
        <BackgroundSlider
          images={[image1, image2, image3, image4, image5, image6]}
          duration={8}
          transition={2}
        />
        <LabelledButton content="Explore Our Options" onClick={this.handleClick} />
      </>
    );
  }
}

export default withRouter(Landing);
