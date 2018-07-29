import React, { Component } from 'react';
import { Link } from 'react-router';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="nav-bar">
          <Link to="/"><div className="header-logo">OddPillars</div></Link>
          <Link to="/blog"><div className="header-link">Blog</div></Link>
        </nav>
      </div>
    )
  }
}

export default Navbar;
