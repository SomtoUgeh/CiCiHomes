import React, { Component } from 'react';
import CardsContainer from './CardsContainer';
import Header from './Header';
import Maps from './Maps';
import { Grid } from 'semantic-ui-react';

export class Units extends Component {
  render() {
    return (
      <>
        <Header />
        <Grid divided="vertically">
          <Grid.Row columns={2}>
            <Grid.Column>
              <CardsContainer />
            </Grid.Column>
            <Grid.Column>
              <Maps />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    );
  }
}

export default Units;
