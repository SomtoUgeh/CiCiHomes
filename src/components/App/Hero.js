import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <div className="hero-content">
          <img
            alt="hero-sections"
            role="presentation"
            src="https://a0.muscache.com/4ea/air/v2/pictures/b3ab7ae3-87aa-4c93-9c9d-0443f423b692.jpg?t=c:w1131-h343,r:w1131-h343-sfit,e:fjpg-c75"
            srcSet="https://a0.muscache.com/4ea/air/v2/pictures/b3ab7ae3-87aa-4c93-9c9d-0443f423b692.jpg?t=c:w1131-h343,r:w1131-h343-sfit,e:fjpg-c75 1131w,
            https://a0.muscache.com/4ea/air/v2/pictures/b3ab7ae3-87aa-4c93-9c9d-0443f423b692.jpg?t=c:w2262-h686,r:w2262-h686-sfit,e:fjpg-c75 2262w,
            https://a0.muscache.com/4ea/air/v2/pictures/b3ab7ae3-87aa-4c93-9c9d-0443f423b692.jpg?t=c:w3393-h1029,r:w3393-h1029-sfit,e:fjpg-c75 3393w"
            style={{
              width: '100%',
              height: '70vh',
              objectFit: 'cover',
              objectPosition: 'center center'
            }}
          />
          <div className="hero-items">
            <span style={{ display: 'block' }}>
              {/* <img src="https://ernestojeh.com/favicon.ico" alt="logo" className="eIntel" /> */}
              <h2 className="hero-title">Cici Homes</h2>
            </span>
            <p className="hero-tagline">Get the quality accommodation from your comfort zone</p>
            <Link to="/get-started" className="learn">
              Get Started ▶︎
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
