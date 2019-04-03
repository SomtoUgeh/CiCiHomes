import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';

export class EditForm extends Component {
  state = {};

  componentDidMount = () => {
    const id = this.props.id;
    const houses = JSON.parse(localStorage.getItem('houseData'));
    const house = houses.find(d => d.id === id);

    this.setState({
      house,
      id: house.id ? house.id : '',
      userId: house.userId ? house.userId : '',
      mainAddress: house.mainAddress ? house.mainAddress : '',
      address: house.address ? house.address : '',
      cost: house.cost ? house.cost : '',
      phone: house.phone ? house.phone : '',
      bathroom: house.bathroom ? house.bathroom : '',
      shortDescription: house.shortDescription ? house.bathroom : '',
      homeType: house.homeType ? house.homeType : '',
      totalRooms: house.totalRooms ? house.totalRooms : '',
      earliestMoveIn: house.earliestMoveIn ? house.earliestMoveIn : '',
      availableLease: house.availableLease ? house.availableLease : '',
      services: house.services ? house.services : '',
      exteriorQualities: house.exteriorQualities.join('') ? house.exteriorQualities.join('') : '',
      interiorQualities: house.interiorQualities.join('') ? house.interiorQualities.join('') : ''
    });
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (localStorage.user) {
      const house = { ...this.state };

      const exterior = house.exteriorQualities.split(',');
      const interior = house.interiorQualities.split(',');

      house.exteriorQualities = exterior;
      house.interiorQualities = interior;

      const houses = JSON.parse(localStorage.getItem('houseData'));
      const newHouses = [...houses, house];

      localStorage.setItem('houseData', JSON.stringify(newHouses));
      this.props.history.push('/get-started');

      toast('Listing edited successfully!', {
        type: toast.TYPE.SUCCESS
      });
    } else {
      toast('Please login to edit listing', {
        type: toast.TYPE.ERROR
      });
    }
  };

  randomId = () => {
    return Math.random()
      .toString(36)
      .substr(2);
  };

  render() {
    const {
      name,
      mainAddress,
      address,
      phone,
      cost,
      bathroom,
      shortDescription,
      homeType,
      totalRooms,
      earliestMoveIn,
      availableLease,
      services,
      exteriorQualities,
      interiorQualities
    } = this.state;

    return (
      <div>
        <div className="new-home">
          <div>
            <h1>List your home</h1>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="form-field">
              <div>
                <label htmlFor="name">Name of Building/Apartment/Accommodation</label>
                <input
                  type="text"
                  name="name"
                  onChange={this.handleChange}
                  value={name ? name : ''}
                  placeholder="Villa in Lagos..."
                />
              </div>
              <div>
                <label htmlFor="name">Short Description</label>
                <input
                  type="text"
                  name="shortDescription"
                  onChange={this.handleChange}
                  value={shortDescription ? shortDescription : ''}
                  placeholder="Really cool home..."
                />
              </div>
              <div>
                <label htmlFor="name">Home type</label>
                <input
                  type="text"
                  name="homeType"
                  onChange={this.handleChange}
                  value={homeType ? homeType : ''}
                  placeholder="Entire home, Apartments, Shared apartments..."
                />
              </div>
              <div>
                <label htmlFor="name">Address</label>
                <input
                  type="text"
                  name="mainAddress"
                  onChange={this.handleChange}
                  value={mainAddress ? mainAddress : ''}
                  placeholder="23b Godmon st, okota Isolo Lagos"
                />
              </div>
              <div>
                <label htmlFor="name">Key Location</label>
                <input
                  type="text"
                  name="address"
                  onChange={this.handleChange}
                  value={address ? address : ''}
                  placeholder="Ikeja, Yaba, VI, Ikoyi..."
                />
              </div>
              <div>
                <label htmlFor="name">Total rooms</label>
                <input
                  type="text"
                  name="totalRooms"
                  value={totalRooms ? totalRooms : ''}
                  onChange={this.handleChange}
                  placeholder="4 Bedrooms..."
                />
              </div>
              <div>
                <label htmlFor="name">Total bathrooms</label>
                <input
                  type="text"
                  name="bathroom"
                  value={bathroom ? bathroom : ''}
                  onChange={this.handleChange}
                  placeholder="3 Bathrooms..."
                />
              </div>
              <div>
                <label htmlFor="name">Earliest move in </label>
                <input
                  type="text"
                  name="earliestMoveIn"
                  value={earliestMoveIn ? earliestMoveIn : ''}
                  onChange={this.handleChange}
                  placeholder="January 2020..."
                />
              </div>
              <div>
                <label htmlFor="name">Available lease</label>
                <input
                  type="text"
                  name="availableLease"
                  value={availableLease ? availableLease : ''}
                  onChange={this.handleChange}
                  placeholder="2 years..."
                />
              </div>
              <div>
                <label htmlFor="name">Services</label>
                <input
                  type="text"
                  name="services"
                  value={services ? services : ''}
                  onChange={this.handleChange}
                  placeholder="Yes/No"
                />
              </div>
              <div>
                <label htmlFor="name">Exterior qualities</label>
                <textarea
                  type="text"
                  name="exteriorQualities"
                  onChange={this.handleChange}
                  value={exteriorQualities ? exteriorQualities : ''}
                />
              </div>
              <div>
                <label htmlFor="name">Interior qualities</label>
                <textarea
                  type="text"
                  name="interiorQualities"
                  onChange={this.handleChange}
                  value={interiorQualities ? interiorQualities : ''}
                />
              </div>
              <div>
                <label htmlFor="name">Phone number</label>
                <input
                  type="text"
                  name="phone"
                  value={phone ? phone : ''}
                  onChange={this.handleChange}
                  placeholder="080X XXXX XXX"
                />
              </div>
              <div>
                <label htmlFor="name">Estimated Amount</label>
                <input
                  type="text"
                  name="cost"
                  value={cost ? cost : ''}
                  onChange={this.handleChange}
                  placeholder="&#8358; 200,000 MoM"
                />
              </div>
              <div className="upload">Upload Images</div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(EditForm);
