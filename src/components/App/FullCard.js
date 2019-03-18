import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../images/tim-easley-317615-unsplash-min.jpg';

const FullCard = () => {
  return (
    <div to="/details" className="housing-card">
      <Link to="/details">
        <div className="housing-card__container">
          <div className="housing-card__image">
            <img src={image1} alt="housing-card__houses" />
          </div>
          <div className="housing-card__write">
            <div className="grouped-write">
              <h4 className="housing-card__title">Skylight Apartments</h4>
              <p className="housing-card__description">
                <span>Apartment</span>
                <span>2 Bedrooms</span>
                <span>3 Bathrooms</span>
                <span>753 Sq.Ft.</span>
              </p>
              <p className="housing-card__address">23b Godmon street, off Okota road.</p>
            </div>

            <p className="housing-card__amount">N200,000 MOM</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FullCard;
