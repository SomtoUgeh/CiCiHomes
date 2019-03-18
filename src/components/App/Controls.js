import React, { Component } from 'react';

export class Controls extends Component {
  render() {
    return (
      <div className="controls">
        <div className="wrapper filters">
          <div className="filter">
            <input type="text" className="filter-search" placeholder="Search Villa in Ikeja..." />
          </div>
          <div className="price filter select">
            <select name="" id="" className="dropdown">
              <option value="hi">Location</option>
              <option value="hi">Ikeja</option>
              <option value="hi">Lekki</option>
              <option value="hi">Ikoyi</option>
              <option value="hi">Alausa</option>
              <option value="hi">Festac</option>
              <option value="hi">Yaba</option>
              <option value="hi">Gbagada</option>
              <option value="hi">Magodo</option>
              <option value="hi">Berger</option>
              <option value="hi">Others</option>
            </select>
          </div>
          <div className="price filter select">
            <select name="" id="">
              <option value="hi">Price</option>
              <option value="hi">hi</option>
              <option value="hi">hi</option>
              <option value="hi">hi</option>
              <option value="hi">hi</option>
              <option value="hi">hi</option>
              <option value="hi">hi</option>
            </select>
          </div>
          <div className="price filter select">
            <select name="" id="">
              <option value="hi">Bedroom</option>
              <option value="hi">1 Bedroom</option>
              <option value="hi">2 Bedrooms</option>
              <option value="hi">3 Bedrooms</option>
              <option value="hi">4 Bedrooms</option>
              <option value="hi">5 Bedrooms</option>
            </select>
          </div>
          <div className="price filter select">
            <select name="" id="">
              <option value="hi">Availability</option>
              <option value="hi">One week</option>
              <option value="hi">Two weeks</option>
              <option value="hi">One month</option>
              <option value="hi">Awaiting confirmation</option>
            </select>
          </div>
          <div className="price filter select">
            <select name="" id="">
              <option value="hi">Services</option>
              <option value="hi">Yes</option>
              <option value="hi">No</option>
              <option value="hi">Likely</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default Controls;
