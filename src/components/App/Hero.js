import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import farm1 from '../../images/farm1.jpg';

export class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <div className="hero-content">
          <img
            alt="hero-sections"
            role="presentation"
            src={farm1}
            style={{
              width: '100%',
              height: '70vh',
              objectFit: 'cover',
              objectPosition: 'center center'
            }}
          />
          <div className="hero-items">
            <span style={{ display: 'block' }}>
              <h2 className="hero-title">Transforming Argiculture with DATA</h2>
            </span>
            <p className="hero-tagline">{''}</p>
            <Link to="/get-started" className="learn">
              Contact Us ▶︎
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
