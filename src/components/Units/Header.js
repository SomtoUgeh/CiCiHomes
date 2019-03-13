import React, { Component } from 'react';

export class Header extends Component {
  render() {
    return (
      <header>
        <a id="logo" href="#">
          EI
        </a>
        <nav>
          <ul>
            <li>
              <a href="#" id="current">
                Browse Homes
              </a>
            </li>
            <li>
              <a href="#">List your home</a>
            </li>
            <li>
              <a href="#">Company</a>
            </li>
            <li>
              <a href="#" id="fb">
                Login
              </a>
            </li>
            <li>
              <a href="#" id="twitter">
                Get Started
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
