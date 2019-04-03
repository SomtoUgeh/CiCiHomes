import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div class="footer_content">
        <div class="nav_down wrapper">
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
                <a href=" ">List your home</a>
              </li>
              <li>
                <a href=" ">Trending</a>
              </li>
              <li>
                <a href=" ">Featured Locations</a>
              </li>
              <li>
                <a href=" ">Featured Destination</a>
              </li>
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
                <a href="mailto:hello@dragnetsolutions.com">info@e-intelhouses.com</a>
              </li>
            </ul>
          </div>

          <div class="social_container">
            <ul>
              <h3>Connect with us</h3>
              <li class="social_btn">
                <a href="https://twitter.com/dragnet" target="_blank">
                  <i class="fab fa-twitter" />
                </a>
                <a href="https://facebook.com/dragnet" target="_blank" class="facebook">
                  <i class="fab fa-linkedin" />
                </a>
                <a href="https://facebook.com/dragnet" target="_blank" class="facebook">
                  <i class="fab fa-facebook-square" />
                </a>
                <a href="https://twitter.com/dragnet" target="_blank" class="facebook">
                  <i class="fab fa-youtube" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="owner">
        <div class="creator">
          <h3 class="copy "> &copy; Copyright 2019 E Intel®</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;