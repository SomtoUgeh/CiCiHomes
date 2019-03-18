import React, { Component } from 'react';
import Header from './Header';
import BrowseHeader from './BrowseHeader';
import Controlled from './Controlled';
import Controls from './Controls';
import Footer from './Footer';

export class Started extends Component {
  render() {
    return (
      <>
        <Header />
        <BrowseHeader />
        <Controls />
        <Controlled />
        {/* <Footer /> */}
      </>
    );
  }
}

export default Started;
