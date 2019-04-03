import React from 'react';
import Header from './Header';
import EditForm from './EditForm';
import Footer from './Footer';

const EditHome = props => {
  return (
    <>
      <Header />
      <EditForm id={props.match.params.id} />
      <Footer />
    </>
  );
};

export default EditHome;
