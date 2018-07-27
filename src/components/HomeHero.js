import React, { Component } from 'react';
import { Link } from 'react-router'

class HomeHero extends Component {
  render() {
    return (
      <div className="home-hero">
        <h1 className="hero-title">ODDPILLARS</h1>
        <h2 className="hero-subtitle">De-Occulting the hidden world</h2>
        <Link to="/blog"><button className="call-to-action">Go To Blog</button></Link>
      </div>
    )
  }
}

export default HomeHero;
