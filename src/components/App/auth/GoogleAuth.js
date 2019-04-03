import React, { Component } from 'react';
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

  onSignIn = async () => {
    await this.auth.signIn();

    this.setState({
      isSignedIn: this.auth.isSignedIn.get(),
      userId: this.auth.currentUser.get().getId(),
      userName: this.auth.currentUser
        .get()
        .getBasicProfile()
        .getName(),
      userEmail: this.auth.currentUser
        .get()
        .getBasicProfile()
        .getEmail()
    });

    const user = {
      id: this.state.userId,
      name: this.state.userName,
      email: this.state.userEmail
    };

    localStorage.setItem('isSignedIn', this.state.isSignedIn);
    localStorage.setItem('user', JSON.stringify(user));

    toast(`Welcome ${user.name}, great to have you here!`, {
      type: toast.TYPE.SUCCESS
    });
  };

  onSignOut = () => {
    this.auth.signOut();
    localStorage.removeItem('user');
    this.setState({ isSignedIn: false });
  };

  render() {
    return (
      <>
        {this.state.isSignedIn || localStorage.user ? (
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
