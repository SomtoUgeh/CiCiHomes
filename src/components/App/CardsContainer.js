import React, { Component } from 'react';
import FullCard from './FullCard';
import { Link } from 'react-router-dom';
import Modal from 'react-responsive-modal';

export class CardsContainer extends Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  handleDelete = () => {
    let id = this.state.id;

    const houses = JSON.parse(localStorage.getItem('houseData'));
    const newHouses = houses.filter(d => d.id !== id);

    localStorage.setItem('houseData', JSON.stringify(newHouses));

    this.setState({ open: false, houses: newHouses });
  };

  handleModalDetails = (selectedName, id) => {
    this.setState({ open: true, selectedName, id });
  };

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
      if (value === 'Bedroom') {
        return this.props.houses;
      }
      const filteredData = houses.filter(r => r.totalRooms !== undefined && r.totalRooms !== null);

      list = filteredData.filter(r => r.totalRooms === value);
      return list;
    }

    if (filters === 'service') {
      if (value === 'Services') {
        return this.props.houses;
      }
      const filteredData = houses.filter(r => r.services !== undefined && r.services !== null);

      list = filteredData.filter(r => r.services === value);
      return list;
    }

    if (filters === 'availability') {
      if (value === 'Availability') {
        return this.props.houses;
      }
      const filteredData = houses.filter(
        r => r.availableLease !== undefined && r.availableLease !== null
      );

      list = filteredData.filter(r => r.availableLease === value);
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
    const { open, selectedName } = this.state;

    return (
      <>
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
                userId={d.userId}
                mainAddress={d.mainAddress}
                handleModalDetails={this.handleModalDetails}
              />
            ))
          ) : (
            <p>
              There are no houses here, please try another filter. You can also create a new listing{' '}
              <Link to="/new">here</Link>
            </p>
          )}
        </div>
        <Modal open={open} onClose={this.onCloseModal} center>
          <div className="modal-content">
            <h2> Are you sure you want to delete {selectedName} ?</h2>
            <button className="delete" onClick={this.handleDelete}>
              Delete
            </button>
          </div>
        </Modal>
      </>
    );
  }
}

export default CardsContainer;
