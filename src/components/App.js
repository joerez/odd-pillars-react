import React, { Component } from 'react';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <nav>
            <Link exact to="/">OddPillars</Link>
            <Link exact to="/blog">Blog</Link>
            <Link exact to="/contact">Contact</Link>
            <Link exact to="/tools">Tools</Link>
          </nav>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
