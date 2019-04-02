import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';

export class NewForm extends Component {
  state = {};

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (localStorage.user) {
      const house = {
        id: this.randomId(),
        ...this.state
      };

      const exterior = house.exteriorQualities.split(',');
      const interior = house.interiorQualities.split(',');

      house.exteriorQualities = exterior;
      house.interiorQualities = interior;
      house.userId = JSON.parse(localStorage.getItem('user')).id;

      const houses = JSON.parse(localStorage.getItem('houseData'));
      const newHouses = [...houses, house];

      console.log(newHouses);
      // localStorage.setItem('houseData', JSON.stringify(newHouses));
      // this.props.history.push('/get-started');

      toast('Listing created successfully!', {
        type: toast.TYPE.SUCCESS
      });
    } else {
      toast('Please login to create new listing', {
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
                  placeholder="Villa in Lagos..."
                />
              </div>
              <div>
                <label htmlFor="name">Short Description</label>
                <input
                  type="text"
                  name="shortDescription"
                  onChange={this.handleChange}
                  placeholder="Really cool home..."
                />
              </div>
              <div>
                <label htmlFor="name">Home type</label>
                <input
                  type="text"
                  name="homeType"
                  onChange={this.handleChange}
                  placeholder="Entire home, Apartments, Shared apartments..."
                />
              </div>
              <div>
                <label htmlFor="name">Total rooms</label>
                <input
                  type="text"
                  name="totalRooms"
                  onChange={this.handleChange}
                  placeholder="4 Bedrooms..."
                />
              </div>
              <div>
                <label htmlFor="name">Total bathrooms</label>
                <input
                  type="text"
                  name="bathroom"
                  onChange={this.handleChange}
                  placeholder="3 Bathrooms..."
                />
              </div>
              <div>
                <label htmlFor="name">Earliest move in </label>
                <input
                  type="text"
                  name="earliestMoveIn"
                  onChange={this.handleChange}
                  placeholder="January 2020..."
                />
              </div>
              <div>
                <label htmlFor="name">Available lease</label>
                <input
                  type="text"
                  name="availableLease"
                  onChange={this.handleChange}
                  placeholder="2 years..."
                />
              </div>
              <div>
                <label htmlFor="name">Services</label>
                <input
                  type="text"
                  name="services"
                  onChange={this.handleChange}
                  placeholder="Yes/No"
                />
              </div>
              <div>
                <label htmlFor="name">Exterior qualities</label>
                <textarea type="text" name="exteriorQualities" onChange={this.handleChange} />
              </div>
              <div>
                <label htmlFor="name">Interior qualities</label>
                <textarea type="text" name="interiorQualities" onChange={this.handleChange} />
              </div>
              <div>
                <label htmlFor="name">Phone number</label>
                <input
                  type="number"
                  name="phone"
                  onChange={this.handleChange}
                  placeholder="080X XXXX XXX"
                />
              </div>
              <div>
                <label htmlFor="name">Estimated Amount</label>
                <input
                  type="number"
                  name="cost"
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

export default withRouter(NewForm);
