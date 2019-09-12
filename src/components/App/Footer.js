import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer_content">
        <div className="nav_down wrapper">
          <div>
            <ul>
              <h3>Company</h3>
              <li>
                <a href=" ">About Us</a>
              </li>
              <li>
                <a href=" ">Testimonials</a>
              </li>
              <li>
                <a href=" ">Press and Media</a>
              </li>
              <li>
                <a href=" ">FAQs</a>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <h3>Services</h3>
              <li>
                <a href=" ">Consultancy</a>
              </li>
              <li>
                <a href=" ">Events and Trainings</a>
              </li>
              <li>
                <a href=" ">Insights</a>
              </li>
              <li></li>
            </ul>
          </div>

          <div>
            <ul>
              <h3>Contact</h3>
              <li>
                <a href="#">Shippers Tower, 3rd Floor. 4 Park Lane, GRA-Apapa, Lagos.</a>
              </li>
              <li>
                <a href="tel:+2347088609791">+234 (0) 708 860 9791</a>
              </li>
              <li>
                <a href="tel:+2347011962033">+234 (0) 701 196 2033</a>
              </li>
              <li>
                <a href="tel:+2348101199767">+234 (0) 810 119 9767</a>
              </li>
              <li>
                <a href="mailto:hello@dragnetsolutions.com">info@cicis.com</a>
              </li>
            </ul>
          </div>

          <div className="social_container">
            <ul>
              <h3>Connect with us</h3>
              <li className="social_btn">
                <a href="https://twitter.com/dragnet" target="_blank">
                  <i className="fab fa-twitter" />
                </a>
                <a href="https://facebook.com/dragnet" target="_blank" className="facebook">
                  <i className="fab fa-linkedin" />
                </a>
                <a href="https://facebook.com/dragnet" target="_blank" className="facebook">
                  <i className="fab fa-facebook-square" />
                </a>
                <a href="https://twitter.com/dragnet" target="_blank" className="facebook">
                  <i className="fab fa-youtube" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="owner">
        <div className="creator">
          <h3 className="copy "> &copy; Copyright 2019 CICIS®</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
