import React from 'react';
import { Link } from 'react-router-dom';
import farm2 from '../../images/farm2.jpg';

const FullImage = () => (
  <div className="presentation wrapper">
    <div className="presentation-content">
      <div>
        <img
          className="presentation-img"
          alt="presentation"
          role="presentation"
          sizes="100vw"
          src={farm2}
          style={{ maxHeight: '450px' }}
        />
      </div>
      <div>
        <div className="presentation-text" style={{ color: 'white' }}>
          Every one has the potential to tranform{' '}
          <span className="_1e8oe5u">our agrictulture industry.</span>
          <div>
            <Link to="/new" className="learn">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FullImage;
