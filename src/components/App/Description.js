import React from 'react';
import coffee from '../../images/coffee.svg';
import secure from '../../images/shield-off.svg';
import dollar from '../../images/dollar-sign.svg';
import map from '../../images/map.svg';

const Description = () => (
  <div className="description wrapper">
    <div className="images-holder">
      <div>
        <img src={secure} alt="info" />
        <div className="describe">
          <h3>Your home is safe with us</h3>
          <p>Secure location, 24/7 support and a book with Confidence guarantee</p>
        </div>
      </div>
      <div>
        <img src={map} alt="info" />
        <div className="describe">
          <h3>Better accommodation starts here</h3>
          <p>From booking to staying, the whole process is easy and enjoyable</p>
        </div>
      </div>
      <div>
        <img src={coffee} alt="info" />
        <div className="describe">
          <h3>All the comforts of home</h3>
          <p>Enjoy full kitchens, laundry, pools, yards and more</p>
        </div>
      </div>
      <div>
        <img src={dollar} alt="info" />
        <div className="describe">
          <h3>More for less</h3>
          <p>More space, more privacy, more amenities — more value</p>
        </div>
      </div>
    </div>
  </div>
);

export default Description;
