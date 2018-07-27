import React, { Component } from 'react';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Navbar />
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
