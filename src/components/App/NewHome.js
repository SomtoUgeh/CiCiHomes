import React, { Component } from 'react';
import Header from './Header';
import BrowseHeader from './BrowseHeader';
import NewForm from './NewForm';
import Footer from './Footer';

export class NewHome extends Component {
  render() {
    return (
      <>
        <Header />
        {/* <BrowseHeader text="List your home" /> */}
        <NewForm />
        <Footer />
      </>
    );
  }
}

export default NewHome;
