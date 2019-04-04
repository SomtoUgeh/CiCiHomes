import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Elements/Loading';

export class Details extends Component {
  state = {};

  componentDidMount() {
    const id = this.props.id;
    const houses = JSON.parse(localStorage.getItem('houseData'));
    const house = houses.find(d => d.id === id);

    this.setState({ house });
  }

  render() {
    const { house } = this.state;

    if (house !== undefined && house !== null) {
      return (
        <div>
          <div className="details wrapper">
            <div className="details-title">
              <div>
                <h3>{house.name}</h3>
                <p>{house.mainAddress}</p>
              </div>
              <div>
                <h5>About this home</h5>
                <p>{house.shortDescription}</p>
              </div>
            </div>

            <div className="details-grid">
              <div>
                <h5>Home Type</h5>
                <p>{house.homeType}</p>
              </div>
              <div>
                <h5>Total Rooms</h5>
                <p>
                  {house.totalRooms} Bedrooms, {house.bathroom} Bathrooms
                </p>
              </div>
              <div>
                <h5>Earliest mover in</h5>
                <p>{house.earliestMoveIn ? house.earliestMoveIn : 'Not available'}</p>
              </div>
              <div>
                <h5>Available lease</h5>
                <p>{house.availableLease}</p>
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
                  {house.exteriorQualities.map((d, i) => (
                    <li>{d}</li>
                  ))}
                </ul>
              </div>
              <div className="exterior">
                <h5>Interior</h5>
                <ul>
                  {house.interiorQualities.map((d, i) => (
                    <li>{d}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="request">
              <div>
                <h3>
                  Ready for a tour ? <br /> Request an expose now
                </h3>
              </div>
              <a href={`mailto:${house.email}`} className="email">
                Email
              </a>
              <Link to="/get-started" className="searching">
                Still Searching ?
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return <Loading />;
  }
}

export default Details;
