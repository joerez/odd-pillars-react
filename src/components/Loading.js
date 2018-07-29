import React, { Component } from 'react';
import 'woah.css/woah.css';

class Loading extends Component {
  render() {
    return (
      <div className="loading-box">
        <div className="loading-div">
          <h1 align="center">OddPillars Is Loading</h1>
        </div>
        <img alt="loading odd pillar" className="loading-img woah rotateComplexOut" src="https://image.ibb.co/mW9pDo/imageedit_11_2098339181.png" />
      </div>
    )
  }
}

export default Loading;
