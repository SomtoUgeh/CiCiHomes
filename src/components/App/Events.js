import React from 'react';
import image3 from '../../images/mateusz-majewski-659603-unsplash-min.jpg';
import eventsImages from '../../images/events.jpg';

const Events = () => {
  return (
    <div className="events">
      <div className="events-image__container">
        <img src={eventsImages} alt="cool" />
      </div>
      <div className="events-text__container">
        <div className="featured-heading">
          <h2 className="featured-title">Events and Trainings</h2>
        </div>
        <div className="events-p">
          <p>
            AA provides a range of training programs ranging from impact evaluation to suitability
            analysis, crop and financial modelling, sector studies, data collection and big data
            analysis amongst other things. Regular Events are organised to promote networking, brand
            marketing and showcasing, third leadership and many more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Events;
