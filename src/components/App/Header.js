import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

export class Header extends Component {
  render() {
    return (
      <header>
        <Link id="logo" to="/">
          EI
        </Link>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/get-started"
                activeStyle={{
                  borderBottom: '3px solid #333'
                }}
              >
                Browse Homes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#"
                activeStyle={{
                  borderBottom: '3px solid #333'
                }}
              >
                List your home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#"
                activeStyle={{
                  borderBottom: '3px solid #333'
                }}
              >
                Login
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
