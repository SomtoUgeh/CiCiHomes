import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';

export class SignUp extends Component {
  state = {};

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (localStorage.users) {
      const user = {
        id: this.randomId(),
        ...this.state
      };

      user.registeredUser = true;

      const users = JSON.parse(localStorage.getItem('users'));
      const newUsers = [...users, user];

      localStorage.setItem('users', JSON.stringify(newUsers));
      this.props.history.push('/');

      toast('Sign up successfully, please sign in', {
        type: toast.TYPE.SUCCESS
      });
    } else {
      toast('Please try sign up again', {
        type: toast.TYPE.ERROR
      });
    }
  };

  randomId = () => {
    return Math.random()
      .toString(36)
      .substr(2);
  };

  render() {
    return (
      <>
        <Header />
        <>
          <div>
            <div className="new-home sign-up">
              <div>
                <h1>Hi, Welcome vendors. Please sign up</h1>
              </div>
              <form onSubmit={this.handleSubmit}>
                <div className="form-field">
                  <div>
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      onChange={this.handleChange}
                      placeholder="Juan Mona"
                    />
                  </div>

                  <div>
                    <label htmlFor="name">Email</label>
                    <input
                      type="email"
                      name="email"
                      onChange={this.handleChange}
                      placeholder="hi@cici-homes.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="name">Address</label>
                    <input
                      type="text"
                      name="address"
                      onChange={this.handleChange}
                      placeholder="23b Godmon st, Okota"
                    />
                  </div>

                  <div>
                    <label htmlFor="name">Phone number</label>
                    <input
                      type="number"
                      name="phone"
                      onChange={this.handleChange}
                      placeholder="08135110089"
                    />
                  </div>

                  <div>
                    <label htmlFor="name">Password</label>
                    <input type="password" name="password" onChange={this.handleChange} />
                  </div>
                  <button type="submit">Continue</button>
                </div>
              </form>
            </div>
          </div>
        </>
        <Footer />
      </>
    );
  }
}

export default withRouter(SignUp);
