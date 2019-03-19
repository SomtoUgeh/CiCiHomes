import React, { Component } from 'react';

export class NewForm extends Component {
  render() {
    return (
      <div>
        <div className="new-home">
          <div>
            <h1>List your home</h1>
          </div>
          <form>
            <div className="form-field">
              <div>
                <label htmlFor="name">Name of Building/Apartment/Accommodation</label>
                <input type="text" placeholder="Villa in Lagos..." />
              </div>
              <div>
                <label htmlFor="name">Short Description</label>
                <input type="text" placeholder="Really cool home..." />
              </div>
              <div>
                <label htmlFor="name">Home type</label>
                <input type="text" placeholder="Entire home, Apartments, Shared apartments..." />
              </div>
              <div>
                <label htmlFor="name">Total rooms</label>
                <input type="text" placeholder="4 Bedrooms, 3 Bathrooms..." />
              </div>
              <div>
                <label htmlFor="name">Earliest move in </label>
                <input type="text" placeholder="January 2020..." />
              </div>
              <div>
                <label htmlFor="name">Available lease</label>
                <input type="text" placeholder="2 years..." />
              </div>
              <div>
                <label htmlFor="name">Services</label>
                <input type="text" placeholder="Yes/No" />
              </div>
              <div>
                <label htmlFor="name">Exterior qualities</label>
                <textarea type="text" />
              </div>
              <div>
                <label htmlFor="name">Interior qualities</label>
                <textarea type="text" />
              </div>
              <div>
                <label htmlFor="name">Phone number</label>
                <input type="number" placeholder="080X XXXX XXX" />
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

export default NewForm;
