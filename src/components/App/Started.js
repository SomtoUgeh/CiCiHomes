import React from 'react';
import Header from './Header';
import BrowseHeader from './BrowseHeader';
import Controlled from './Controlled';
import Controls from './Controls';

const Started = () => {
  return (
    <>
      <Header />
      <BrowseHeader text="Browse through our homes" />
      <Controls />
      <Controlled />
    </>
  );
};

export default Started;
