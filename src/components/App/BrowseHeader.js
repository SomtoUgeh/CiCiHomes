import React from 'react';

const BrowseHeader = ({ text }) => {
  return (
    <div className="hero browse-header">
      <div class="product_container">
        <div class="products">
          <div class="wrapper solid">
            <h2 className="hero-title">{text}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseHeader;
