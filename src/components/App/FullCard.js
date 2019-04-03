import React from 'react';
import { Link } from 'react-router-dom';
// import image1 from '../../images/tim-easley-317615-unsplash-min.jpg';
import deleteHouse from '../../images/icon-box.svg';
import setting from '../../images/icon-cog.svg';

const images = [
  'https://fibre.ams3.digitaloceanspaces.com/ovpmrkwj1d5zactclr5r.jpg',
  'https://fibre.ams3.digitaloceanspaces.com/Fav_Chev_Right.jpg',
  'https://fibre.ams3.digitaloceanspaces.com/catxulp9o8kmsnykngb0.jpg',
  'https://fibre.ams3.digitaloceanspaces.com/ohipygsmnu4uwk55js7n.jpg',
  'https://fibre.ams3.digitaloceanspaces.com/bkpllttagvxl3tgvzodb.jpg',
  'https://fibre.ams3.digitaloceanspaces.com/u6hwx01jtktmradzfsqv.jpg'
];

const randomImages = images => {
  return images[Math.floor(Math.random() * images.length)];
};

const FullCard = ({
  name,
  address,
  cost,
  totalRooms,
  homeType,
  bathroom,
  id,
  userId,
  mainAddress,
  handleModalDetails
}) => {
  return (
    <>
      <div to="/details" className="housing-card">
        <div className="housing-card__container">
          <div className="housing-card__image">
            <img src={randomImages(images)} alt="housing-card__houses" />`
          </div>
          <div className="housing-card__write">
            <Link to={`/details/${id}`}>
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
            </Link>

            <p className="housing-card__amount">
              &#8358; {cost}
              {localStorage.user && userId === JSON.parse(localStorage.getItem('user')).id && (
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
                      handleModalDetails(name, id);
                    }}
                  />
                </div>
              )}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullCard;
