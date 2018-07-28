import React, { Component } from 'react';
import { Link } from 'react-router';


class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="page-footer blue-grey">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">OddPillars</h5>
                <p className="grey-text text-lighten-4">De-Occulting the Hidden World</p>
              </div>
              <div className="col l4 offset-l2 s12">
              <div className="align-left">
                <h5 className="white-text">Links</h5>
                <ul>
                    <li><a className="grey-text text-lighten-3" href="#!">Home</a></li>
                    <li><a className="grey-text text-lighten-3" href="#!">Contact Us</a></li>
                    <li><Link className="grey-text text-lighten-3" to="/blog">Blog</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2018 Copyright by OddPillars.com
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Footer;
