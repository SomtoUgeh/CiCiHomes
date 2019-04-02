import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../images/tim-easley-317615-unsplash-min.jpg';

const FullCard = ({ image, name, address, cost, totalRooms, homeType, bathroom }) => {
  return (
    <div to="/details" className="housing-card">
      <Link to="/details">
        <div className="housing-card__container">
          <div className="housing-card__image">
            <img src={image1} alt="housing-card__houses" />
          </div>
          <div className="housing-card__write">
            <div className="grouped-write">
              <h4 className="housing-card__title">{name}</h4>
              <p className="housing-card__description">
                <span>{homeType}</span>
                <span>{totalRooms} bedrooms</span>
                <span>{bathroom} bathrooms</span>
                <span>753 Sq.Ft.</span>
              </p>
              <p className="housing-card__address">{address}</p>
            </div>

            <p className="housing-card__amount">&#8358; {cost}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FullCard;
