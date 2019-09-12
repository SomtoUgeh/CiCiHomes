import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

export class Header extends Component {
  render() {
    return (
      <header>
        <Link id="logo" to="/">
          CICIS
        </Link>
        <nav>
          <ul>
            <li>
              <NavLink
                to="#e"
                activeStyle={{
                  borderBottom: '3px solid #333'
                }}
              >
                SERVICES
              </NavLink>
            </li>

            <li>
              <NavLink
                to="#e"
                activeStyle={{
                  borderBottom: '3px solid #333'
                }}
              >
                CONSULTANCY
              </NavLink>
            </li>

            <li>
              <NavLink
                to="#e"
                activeStyle={{
                  borderBottom: '3px solid #333'
                }}
              >
                EVENT & TRAINING
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#e"
                activeStyle={{
                  borderBottom: '3px solid #333'
                }}
              >
                INSIGHTS
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
