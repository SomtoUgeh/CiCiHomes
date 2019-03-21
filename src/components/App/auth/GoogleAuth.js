import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

export class GoogleAuth extends Component {
  state = { isSignedIn: null, user: '' };

  componentDidMount = () => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId: '185502951074-v6d1a28evm0qqgkqlfiivfcl7q4ptb89.apps.googleusercontent.com',
          scope: 'email'
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
        });
    });
  };

  onSignIn = () => {
    this.auth.signIn();
    const userEmail = this.auth.currentUser
      .get()
      .getBasicProfile()
      .getEmail();

    this.setState({ user: userEmail });
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    localStorage.setItem('isSignedIn', this.state.isSignedIn);

    toast('Welcome, great to have you here!', {
      type: toast.TYPE.SUCCESS
    });
  };

  onSignOut = () => {
    this.auth.signOut();
  };

  render() {
    return (
      <>
        {this.state.isSignedIn ? (
          <button onClick={this.onSignOut} className="auth">
            Logout
          </button>
        ) : (
          <button onClick={this.onSignIn} className="auth">
            Login
          </button>
        )}
      </>
    );
  }
}

export default GoogleAuth;
