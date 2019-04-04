import React, { Component } from 'react';
import { toast } from 'react-toastify';
import history from '../../../history';
import { withRouter } from 'react-router-dom';

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

    const users = JSON.parse(localStorage.getItem('users'));

    if (users.find(d => d.email === user.email)) {
      this.setState({ isSignedIn: this.auth.isSignedIn.get() });

      localStorage.setItem('isSignedIn', this.state.isSignedIn);
      localStorage.setItem('user', JSON.stringify(user));

      toast(`Welcome ${user.name}, great to have you here!`, {
        type: toast.TYPE.SUCCESS
      });

      this.props.history.push('/get-started');
      // history.push('/get-started');
    } else {
      this.auth.signOut();
      toast(`Please sign up to access all of our features`, {
        type: toast.TYPE.ERROR
      });
    }
  };

  onSignOut = () => {
    this.setState({ isSignedIn: false });
    this.auth.signOut();
    localStorage.removeItem('user');
    localStorage.setItem('isSignedIn', this.state.isSignedIn);

    this.props.history.push('/');
    // history.push('/');
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

export default withRouter(GoogleAuth);
