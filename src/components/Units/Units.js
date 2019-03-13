import React, { Component } from 'react';
import CardsContainer from './CardsContainer';
import Header from './Header';
import Maps from './Maps';
import { Grid } from 'semantic-ui-react';
import Hero from './Hero';
import Featured from './Featured';

export class Units extends Component {
  render() {
    return (
      <>
        <Header />
        <Hero />
        <Featured />

        {/* <Grid divided="vertically" style={{ marginTop: '150px' }}>
          <Grid.Row columns={2}>
            <Grid.Column>
              <CardsContainer />
            </Grid.Column>
            <Grid.Column>
              <Maps />
            </Grid.Column>
          </Grid.Row>
        </Grid> */}
      </>
    );
  }
}

export default Units;
