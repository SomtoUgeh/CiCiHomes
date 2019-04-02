import React, { Component } from 'react';
import FullCard from './FullCard';
import { Link } from 'react-router-dom';

export class CardsContainer extends Component {
  state = {};

  componentDidMount() {
    this.setState({
      houses: this.props.houses,
      filterType: this.props.filterType,
      value: this.props.value
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.houses !== prevProps.houses) {
      let houses = this.props.houses;
      this.setState({ houses });
    }

    if (this.props.filterType !== prevProps.filterType) {
      this.setState({
        filterType: this.props.filterType,
        houses: this.filterOption(this.props.filterType, this.props.value)
      });
    }

    if (this.props.value !== prevProps.value) {
      this.setState({
        value: this.props.value,
        houses: this.filterOption(this.props.filterType, this.props.value)
      });
    }
  }

  filterOption = (filters, value) => {
    let houses = this.props.houses;
    let list;

    if (filters === 'address') {
      if (value === 'Location') {
        return this.props.houses;
      }

      const filteredData = houses.filter(r => r.address !== undefined && r.address !== null);

      list = filteredData.filter(r => r.address === value);
      return list;
    }

    if (filters === 'price') {
      if (value === 'Price') {
        return this.props.houses;
      }

      const filteredData = houses.filter(r => r.price !== undefined && r.price !== null);

      list = filteredData.filter(r => r.price === value);
      return list;
    }

    if (filters === 'bedroom') {
      if (value === 'Location') {
        return this.props.houses;
      }
      const filteredData = houses.filter(r => r.bedroom !== undefined && r.bedroom !== null);

      list = filteredData.filter(r => r.bedroom === value);
      return list;
    }

    if (filters === 'service') {
      if (value === 'Services') {
        return this.props.houses;
      }
      const filteredData = houses.filter(r => r.service !== undefined && r.service !== null);

      list = filteredData.filter(r => r.service === value);
      return list;
    }

    if (filters === 'availability') {
      if (value === 'Availability') {
        return this.props.houses;
      }
      const filteredData = houses.filter(
        r => r.availability !== undefined && r.availability !== null
      );

      list = filteredData.filter(r => r.availability === value);
      return list;
    }

    if (filters === 'search') {
      if (value === '') {
        return this.props.houses;
      }

      const filteredData = houses.filter(r => r.name !== undefined && r.name !== null);

      list = filteredData.filter(r => {
        const title = r.name.toLowerCase().includes(value.toLowerCase());
        return title;
      });

      return list;
    }

    return houses;
  };

  render() {
    return (
      <div
        style={{
          height: '100%',
          overflow: 'auto',
          padding: '25px',
          marginTop: '310px'
        }}
      >
        {this.state.houses !== undefined && this.state.houses.length > 0 ? (
          this.state.houses.map((d, i) => (
            <FullCard
              id={d.id}
              key={d.id}
              name={d.name}
              homeType={d.homeType}
              totalRooms={d.totalRooms}
              bathroom={d.bathroom}
              address={d.address}
              cost={d.cost}
            />
          ))
        ) : (
          <p>
            There are no houses here, please try another filter. You can also create a new listing{' '}
            <Link to="/new">here</Link>
          </p>
        )}
      </div>
    );
  }
}

export default CardsContainer;
