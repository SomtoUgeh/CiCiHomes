import React from 'react';

const BrowseHeader = ({ text }) => {
  return (
    <div className="hero browse-header">
      <div className="product_container">
        <div className="products">
          <div className="wrapper solid">
            <h2 className="hero-title">{text}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseHeader;
