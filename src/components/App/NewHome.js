import React, { Component } from 'react';
import Header from './Header';
import NewForm from './NewForm';
import Footer from './Footer';

export class NewHome extends Component {
  render() {
    return (
      <>
        <Header />
        <NewForm />
        <Footer />
      </>
    );
  }
}

export default NewHome;
