import React, { Component } from 'react';
import { Link } from 'react-router'

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';


class HomeHero extends Component {
  render() {
    return (
      <div className="home-hero">
        <h1 className="hero-title">ODDPILLARS</h1>
        <h2 className="hero-subtitle">De-Occulting the hidden world</h2>
        <center>
          <Link className="call-to-action hoverable waves-effect waves-purple" to="/blog">Go To Blog</Link>
        </center>
      </div>
    )
  }
}

export default HomeHero;
