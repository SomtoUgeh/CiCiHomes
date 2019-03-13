import React, { Component } from 'react';
import Cards from './Cards';
import { Grid } from 'semantic-ui-react';

export class CardsContainer extends Component {
  render() {
    return (
      <div style={{ height: '100%', overflow: 'auto', width: '55vw', padding: '25px' }}>
        <Grid divided="vertically">
          <Grid.Row columns={3}>
            <Grid.Column>
              <Cards />
            </Grid.Column>
            <Grid.Column>
              <Cards />
            </Grid.Column>
            <Grid.Column>
              <Cards />
            </Grid.Column>
            <Grid.Column>
              <Cards />
            </Grid.Column>
            <Grid.Column>
              <Cards />
            </Grid.Column>
            <Grid.Column>
              <Cards />
            </Grid.Column>
            <Grid.Column>
              <Cards />
            </Grid.Column>
            <Grid.Column>
              <Cards />
            </Grid.Column>
            <Grid.Column>
              <Cards />
            </Grid.Column>
            <Grid.Column>
              <Cards />
            </Grid.Column>
            <Grid.Column>
              <Cards />
            </Grid.Column>
            <Grid.Column>
              <Cards />
            </Grid.Column>
            <Grid.Column>
              <Cards />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default CardsContainer;
