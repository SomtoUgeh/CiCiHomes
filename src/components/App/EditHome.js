import React, { Component } from 'react';
import Header from './Header';
import EditForm from './EditForm';
import Footer from './Footer';

export class EditHome extends Component {
  render() {
    return (
      <>
        <Header />
        <EditForm id={this.props.match.id} />
        <Footer />
      </>
    );
  }
}

export default EditHome;
