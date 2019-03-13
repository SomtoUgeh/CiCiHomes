import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const Card1 = ({ image, title, description }) => (
  <div className="image-container">
    <img src={image} alt="houses" />
    <div className="house-descriptions">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

export default Card1;
