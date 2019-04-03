import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../images/tim-easley-317615-unsplash-min.jpg';
import deleteHouse from '../../images/icon-box.svg';
import setting from '../../images/icon-cog.svg';
import Modal from 'react-responsive-modal';

export class FullCard extends Component {
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
    let id = this.state.selectedId;

    const houses = JSON.parse(localStorage.getItem('houseData'));
    const newHouses = houses.filter(d => d.id !== id);

    localStorage.setItem('houseData', JSON.stringify(newHouses));
  };

  render() {
    const user = JSON.parse(localStorage.getItem('user'));
    const userInfo = user.id;

    const {
      image,
      name,
      address,
      cost,
      totalRooms,
      homeType,
      bathroom,
      id,
      userId,
      mainAddress
    } = this.props;

    const { open, selectedName } = this.state;

    return (
      <>
        <div to="/details" className="housing-card">
          <Link to={`/details/${id}`}>
            <div className="housing-card__container">
              <div className="housing-card__image">
                <img src={image1} alt="housing-card__houses" />
              </div>
              <div className="housing-card__write">
                <div className="grouped-write">
                  <h4 className="housing-card__title">{name}</h4>
                  <p className="housing-card__description">
                    <span>{homeType}</span>
                    <span>{totalRooms} bedrooms</span>
                    <span>{bathroom} bathrooms</span>
                    <span>753 Sq.Ft.</span>
                  </p>
                  <p className="housing-card__address">{mainAddress}</p>
                  <p> {address}</p>
                </div>

                <p className="housing-card__amount">
                  &#8358; {cost}
                  {userId === userInfo && (
                    <div className="container-controls">
                      <Link to={`/edit/${id}`}>
                        <img
                          src={setting}
                          alt="setting"
                          title="Edit house"
                          className="house-controls settings"
                        />
                      </Link>
                      <img
                        src={deleteHouse}
                        alt="delete"
                        title="Delete house"
                        className="house-controls"
                        onClick={() => {
                          this.setState({ selectedId: id, selectedName: name });
                        }}
                      />
                    </div>
                  )}
                </p>
              </div>
            </div>
          </Link>
        </div>
        <Modal open={open} onClose={this.onCloseModal} center>
          <div className="request">
            <h2>`Are you sure you want to delete ${selectedName} ?`</h2>
            <button className="email" onClick={this.handleDelete}>
              Delete
            </button>
          </div>
        </Modal>
      </>
    );
  }
}

export default FullCard;
