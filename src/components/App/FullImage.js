import React from 'react';
import { Link } from 'react-router-dom';

const FullImage = () => (
  <div className="presentation wrapper">
    <div className="presentation-content">
      <div>
        <img
          className="presentation-img"
          alt="presentation"
          role="presentation"
          sizes="100vw"
          src="https://a0.muscache.com/4ea/air/v2/pictures/4a6409cc-7ee0-44ff-a78e-520fbb51054e.jpg?t=c:w1131-h343,r:w1131-h343-sfit,e:fjpg-c75"
          srcSet="https://a0.muscache.com/4ea/air/v2/pictures/4a6409cc-7ee0-44ff-a78e-520fbb51054e.jpg?t=c:w1131-h343,r:w1131-h343-sfit,e:fjpg-c75 1131w,https://a0.muscache.com/4ea/air/v2/pictures/4a6409cc-7ee0-44ff-a78e-520fbb51054e.jpg?t=c:w2262-h686,r:w2262-h686-sfit,e:fjpg-c75 2262w,https://a0.muscache.com/4ea/air/v2/pictures/4a6409cc-7ee0-44ff-a78e-520fbb51054e.jpg?t=c:w3393-h1029,r:w3393-h1029-sfit,e:fjpg-c75 3393w"
        />
      </div>
      <div>
        <div className="presentation-text">
          Each one-of-a-kind home is <span className="_1e8oe5u">thoughtfully decorated.</span>
          <div>
            <Link to="/new" className="learn">
              List your home ︎
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FullImage;
