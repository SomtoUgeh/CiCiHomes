import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class GoogleAuth extends Component {
  state = { isSignedIn: null };

  componentDidMount = () => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId: '185502951074-s10jhiatvvv2oqvr49dn280hporm16au.apps.googleusercontent.com',
          scope: 'email'
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          localStorage.setItem('isSignedIn', this.state.isSignedIn);
        });
    });
  };

  onSignIn = async () => {
    await this.auth.signIn();
    const userEmail = this.auth.currentUser
      .get()
      .getBasicProfile()
      .getEmail();

    const idToken = this.auth.currentUser.get().getAuthResponse().id_token;
    this.setState({ isSignedIn: true });
  };

  onSignOut = async () => {
    await this.auth.signOut();
  };

  render() {
    return (
      <>
        {this.state.isSignedIn ? (
          <NavLink
            onClick={this.onSignOut}
            to="#"
            activeStyle={{
              borderBottom: '3px solid #333'
            }}
          >
            Logout
          </NavLink>
        ) : (
          <NavLink
            onClick={this.onSignIn}
            to="#"
            activeStyle={{
              borderBottom: '3px solid #333'
            }}
          >
            Login
          </NavLink>
        )}
      </>
    );
  }
}

export default GoogleAuth;
