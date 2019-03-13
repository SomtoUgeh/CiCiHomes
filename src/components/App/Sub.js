import React, { Component } from 'react';

export class Sub extends Component {
  render() {
    return (
      <section class="product_container">
        <div class="products">
          <div class="wrapper">
            <div class="product_content">
              <h1>Get the best Information first!</h1>
              <p>
                Are you ready for the future of work ? Subscribe now and get the latest from dragnet
                weekly.
              </p>
              <div class="subscribe">
                <form action="">
                  <div class="field">
                    <input
                      type="text"
                      name="fullname"
                      id="fullname"
                      placeholder="Your email address"
                    />
                  </div>
                </form>
                <a href="" class="cta_demo">
                  Subscribe
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Sub;
