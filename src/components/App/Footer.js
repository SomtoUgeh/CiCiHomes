import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <footer>
        <div class="footer_content">
          <div class="nav_down">
            <div class="core_info">
              <div>
                <ul>
                  <p>ABOUT US</p>
                  <li>
                    <a href=" ">Who are We</a>
                  </li>
                  <li>
                    <a href=" ">Mission</a>
                  </li>
                  <li>
                    <a href=" ">Vision</a>
                  </li>
                  <li>
                    <a href=" ">Awards</a>
                  </li>
                  <p class="break" />
                  <li>
                    <a href=" ">BLOG</a>
                  </li>
                  <li>
                    <a href=" ">FAQs</a>
                  </li>
                </ul>
              </div>

              <div>
                <ul>
                  <p>SOLUTIONS</p>
                  <li>
                    <a href=" ">Scholarship and Bursary Management</a>
                  </li>
                  <li>
                    <a href=" ">Recruitment Technology</a>
                  </li>
                  <li>
                    <a href=" ">Psychometric Tools</a>
                  </li>
                  <li>
                    <a href=" ">Computer Based Testing</a>
                  </li>
                  <li>
                    <a href=" ">Enterprise Solutions</a>
                  </li>
                  <li>
                    <a href=" ">Competency Gap Analysis</a>
                  </li>
                </ul>
              </div>

              <div>
                <ul>
                  <p>CONTACT US</p>
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
                    <a href="mailto:hello@dragnetsolutions.com">info@dragnet-solutions.com</a>
                  </li>

                  <li>
                    <p class="break" />
                    <p class="abuja">
                      Abuja Office:
                      <br />
                      <a href="tel:+2347088609794"> +234 (0) 7088609794</a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div class="social_container">
              <ul>
                <p>CONNECT WITH US</p>
                <li class="social_btn">
                  <a href="https://twitter.com/dragnet" target="_blank">
                    <i class="fab fa-twitter" />
                  </a>
                  <a href="https://facebook.com/dragnet" target="_blank" class="facebook">
                    <i class="fab fa-facebook-square" />
                  </a>
                  <a href="https://twitter.com/dragnet" target="_blank" class="facebook">
                    <i class="fab fa-youtube" />
                  </a>
                  <a href="https://facebook.com/dragnet" target="_blank" class="facebook">
                    <i class="fab fa-linkedin" />
                  </a>
                </li>
                <li class="social_btn" />
              </ul>
            </div>
          </div>
        </div>

        <div class="owner">
          <div class="creator">
            <p class="copy "> &copy; Copyright 2019 E Intel®</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
