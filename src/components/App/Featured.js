import React, { Component } from 'react';
import image3 from '../../images/mateusz-majewski-659603-unsplash-min.jpg';

export class Featured extends Component {
  render() {
    return (
      <div className="featured">
        <div className="featured-wrapped wrapper">
          <div className="featured-heading">
            <h2 className="featured-title">Consultancy</h2>
            <p className="featured-tagline">These are the services we offer as a company</p>
          </div>

          <div className="cicis-services__container">
            <div className="cicis-services__item">
              <div className="cicis-services__text">
                <div className="cicis-services__textgrid">
                  <div className="services__textgrid__inner">
                    <div className="cicis-services__avatar">
                      <img className="cicis-services__avatar-image" src={image3} alt="cool" />
                    </div>
                    <div className="cicis-services__avatar-text">
                      <h3>Cost</h3>
                      <p>
                        We assist our clients in achieving zero-based budgeting,  rapidly capturing
                        cost saving opportunities and strategically reforming their cost structure.{' '}
                      </p>
                    </div>
                  </div>

                  <div className="services__textgrid__inner">
                    <div className="cicis-services__avatar">
                      <img className="cicis-services__avatar-image" src={image3} alt="cool" />
                    </div>
                    <div className="cicis-services__avatar-text">
                      <h3>Digital</h3>
                      <p>Immediate steps that set you on a path to digital leadership.</p>
                    </div>
                  </div>

                  <div className="services__textgrid__inner">
                    <div className="cicis-services__avatar">
                      <img className="cicis-services__avatar-image" src={image3} alt="cool" />
                    </div>
                    <div className="cicis-services__avatar-text">
                      <h3>Operations</h3>
                      <p>
                        We evaluate business operations—from supply chain to unlock growth, reduce
                        costs and augment thought leadership.
                      </p>
                    </div>
                  </div>
                  <div className="services__textgrid__inner">
                    <div className="cicis-services__avatar">
                      <img className="cicis-services__avatar-image" src={image3} alt="cool" />
                    </div>
                    <div className="cicis-services__avatar-text">
                      <h3>Strategy</h3>
                      <p>
                        We work with companies to develop cost effective strategies that deliver
                        results.
                      </p>
                    </div>
                  </div>
                  <div className="services__textgrid__inner">
                    <div className="cicis-services__avatar">
                      <img className="cicis-services__avatar-image" src={image3} alt="cool" />
                    </div>
                    <div className="cicis-services__avatar-text">
                      <h3>Organisation</h3>
                      <p>
                        Ensure your organisation is set up to deliver on your company’s strategy.
                      </p>
                    </div>
                  </div>
                  <div className="services__textgrid__inner">
                    <div className="cicis-services__avatar">
                      <img className="cicis-services__avatar-image" src={image3} alt="cool" />
                    </div>
                    <div className="cicis-services__avatar-text">
                      <h3>Mergers & Acquisitions</h3>
                      <p>Acquisition strategy,  commercial diligence and merger integration.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Featured;
