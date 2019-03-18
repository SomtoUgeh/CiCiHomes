import React from 'react';

const DetailsImage = ({ image, title }) => {
  return (
    <div className="details-image__hero">
      <img src={image} alt={title} />
    </div>
  );
};

export default DetailsImage;
