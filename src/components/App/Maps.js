import React, { Component } from 'react';
import img from '../../images/buildings-downtown-manhattan-nyc_925x-min.jpg';

export class Maps extends Component {
  render() {
    return (
      <div className="map-container">
        <div>
          <img src={img} alt="cool" />
        </div>
      </div>
    );
  }
}

export default Maps;
