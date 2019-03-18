import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Details extends Component {
  render() {
    return (
      <div>
        <div className="details wrapper">
          <div className="details-title">
            <div>
              <h3>2 Bedroom D1</h3>
              <p>23b Godmon street, off Okota Isolo.</p>
            </div>
            <div>
              <h5>About this home</h5>
              <p>Unfurnished 2-bedroom apartment in a quiet neighbourhood in Lekki Phase 1</p>
            </div>
          </div>

          <div className="details-grid">
            <div>
              <h5>Home Type</h5>
              <p>Entire Home</p>
            </div>
            <div>
              <h5>Total Rooms</h5>
              <p>2 Bedrooms, 2 Bathrooms</p>
            </div>
            <div>
              <h5>Earliest mover in</h5>
              <p>June 2019</p>
            </div>
            <div>
              <h5>Available lease</h5>
              <p>2 years</p>
            </div>
            <div>
              <h5>Facility Manager</h5>
              <p>Reaching Perfection</p>
            </div>
          </div>

          <div className="extra-details">
            <div className="exterior">
              <h5>Exterior</h5>
              <ul>
                <li>Good</li>
                <li> Electrical and Mechanical maintenance</li>
                <li> Fire Safety Installation and maintenance</li>
                <li> Fumigation</li>
                <li>Generator Maintenance</li>
                <li>Sewage Evacuation</li>
                <li>Security</li>
              </ul>
            </div>
            <div className="exterior">
              <h5>Interior</h5>
              <ul>
                <li>Good</li>
                <li> Painting</li>
                <li> Fire Safety Installation and maintenance</li>
                <li> Fumigation</li>
                <li>Cleaning</li>
                <li>Electricity</li>
              </ul>
            </div>
          </div>

          <div className="request">
            <div>
              <h3>
                Ready for a tour ? <br /> Request an expose now
              </h3>
            </div>
            <button className="email">Email</button>
            <Link to="/get-started" className="searching">
              Still Searching ?
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
