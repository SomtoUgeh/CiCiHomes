import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import GoogleAuth from './auth/GoogleAuth';

export class Header extends Component {
  state = {
    isSignedIn: ''
  };

  componentDidMount = () => {
    const isSignedIn = JSON.parse(localStorage.getItem('isSignedIn'));

    this.setState({ isSignedIn });
  };

  render() {
    const { isSignedIn } = this.state;

    return (
      <header>
        <Link id="logo" to="/">
          Cici
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
            {isSignedIn ? null : (
              <li>
                <NavLink
                  to="/sign-up"
                  activeStyle={{
                    borderBottom: '3px solid #333'
                  }}
                >
                  Sign Up
                </NavLink>
              </li>
            )}
            {isSignedIn && (
              <li>
                <NavLink
                  to="/new"
                  activeStyle={{
                    borderBottom: '3px solid #333'
                  }}
                >
                  List your home
                </NavLink>
              </li>
            )}
            <li>
              <GoogleAuth />
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
